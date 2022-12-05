import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import PasswordForm from '../PasswordForm/PasswordForm';
import PasswordItem from '../PasswordItem/PasswordItem';
import styles from './PasswordList.module.css';

const PasswordList = () => {
    const { userInfo } = useAuth();
    const [savedPasswords, setSavedPasswords] = useState(null);

    useEffect(() => {
        if (!userInfo) return;

        const getUserPassword = JSON.parse(
            localStorage.getItem(`${userInfo.user}-passwords`) || '[]'
        );
        setSavedPasswords(getUserPassword);
    }, [userInfo]);

    return (
        <div className={styles.container}>
            <h1>Your password manager</h1>
            <h3>Here you can save your passwords</h3>
            <div>
                <PasswordForm
                    savedPasswords={savedPasswords}
                    setSavedPasswords={setSavedPasswords}
                />
                <div className={styles.form}>
                    {savedPasswords?.length ? (
                        <ul className={styles.list}>
                            {savedPasswords.map((passwordData) => (
                                <PasswordItem
                                    passwordData={passwordData}
                                    savedPasswords={savedPasswords}
                                    setSavedPasswords={setSavedPasswords}
                                />
                            ))}
                        </ul>
                    ) : (
                        <>
                            <h3>
                                Please, add passwords to your password manager
                            </h3>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PasswordList;
