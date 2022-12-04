import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../AuthContext';
import PasswordItem from '../PasswordItem/PasswordItem';
import styles from './PasswordList.module.css';

const PasswordList = () => {
    const { userInfo } = useAuth();
    const [savedPasswords, setSavedPasswords] = useState(null);
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        if (!userInfo) return;

        const getUserPassword = JSON.parse(
            localStorage.getItem(`${userInfo.user}-passwords`) || '[]'
        );
        setSavedPasswords(getUserPassword);
    }, [userInfo]);

    const onAddContact = (passwordData) => {
        const savedPasswordList = [passwordData, ...savedPasswords];
        setSavedPasswords(savedPasswordList);

        localStorage.setItem(
            `${userInfo.user}-passwords`,
            JSON.stringify(savedPasswordList)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const passwordData = {
            id: uuidv4(),
            name: newName,
            password: newPassword
        };
        onAddContact(passwordData);
        form.reset();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'resource':
                setNewName(value);
                break;
            case 'password':
                setNewPassword(value);
                break;
            default:
        }
    };

    return (
        <div className={styles.container}>
            <h1>Your password manager</h1>
            <h3>Here you can save your passwords</h3>
            <div>
                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    <label className={styles.label}>
                        Resource
                        <input
                            className={styles.input}
                            type="resource"
                            name="resource"
                            maxLength={30}
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className={styles.label}>
                        Password
                        <input
                            className={styles.input}
                            type="password"
                            name="password"
                            maxLength={20}
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <button className={styles.button} type="submit">
                        Save
                    </button>
                </form>
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
