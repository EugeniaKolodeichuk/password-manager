import React from 'react';
import styles from './PasswordItems.module.css';
import { useState, useEffect } from 'react';

const PasswordItems = () => {
    const [passwords, setPasswords] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const sitesPasswords = localStorage.getItem('sitesPassword');
    const user = JSON.parse(localStorage.getItem('loginData')).user;

    console.log('sites pi', sitesPasswords);
    console.log('user pi', user);

    /* useEffect(() => {
        const parsedData = JSON.parse(localStorage.getItem('loginData'));
        setUser(parsedData.user);

        console.log('parsed data', email);
    }, [user]); */

    useEffect(() => {
        localStorage.setItem(
            `${user}-sitesPassword`,
            JSON.stringify(passwords)
        );
    }, [passwords]);

    const onDeleteContact = (passwordId) => {
        setPasswords(
            passwords.filter((password) => password.id !== passwordId)
        );
    };

    const onRevealContact = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className={styles.section}>
            {passwords ? (
                <ul className={styles.list}>
                    {passwords?.map(({ id, name, password }) => (
                        <li className={styles.item} key={id}>
                            <p className={styles.name}> {name}:</p>
                            <input
                                type={passwordShown ? 'text' : 'password'}
                                value={password}
                                className={styles.number}
                            />
                            <button
                                className={styles.button}
                                type="button"
                                onClick={() => onRevealContact()}
                            >
                                Reveal
                            </button>
                            <button
                                className={styles.button}
                                type="button"
                                //onClick={() => onDeleteContact(id)}
                            >
                                Edit
                            </button>
                            <button
                                className={styles.button}
                                type="button"
                                onClick={() => onDeleteContact(id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <h3>Please, add passwords to your password manager</h3>
            )}
            {/* <ul className={styles.list}>
                {password?.map(({ id, name, password }) => (
                    <li className={styles.item} key={id}>
                        <p className={styles.name}> {name}:</p>
                        <input
                            type={passwordShown ? 'text' : 'password'}
                            value={password}
                            className={styles.number}
                        />
                        <button
                            className={styles.button}
                            type="button"
                            onClick={() => onRevealContact()}
                        >
                            Reveal
                        </button>
                        <button
                            className={styles.button}
                            type="button"
                            //onClick={() => onDeleteContact(id)}
                        >
                            Edit
                        </button>
                        <button
                            className={styles.button}
                            type="button"
                            onClick={() => onDeleteContact(id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default PasswordItems;
