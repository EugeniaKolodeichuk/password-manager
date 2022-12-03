import styles from './PasswordList.module.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

const PasswordList = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const parsedData = JSON.parse(localStorage.getItem('loginData'));
        setEmail(parsedData.email);
        //setPassword(parsedData.password);
        setUser(parsedData.user);

        console.log('parsed data', email);
    }, [user, email]);

    console.log('user', user);

    useEffect(() => {
        localStorage.setItem(`${user}-passwords`, JSON.stringify(password));
        setPassword(password);
    }, []);
    const getUserPassword = JSON.parse(
        localStorage.getItem(`${user}-passwords`)
    );
    const [password, setPassword] = useState(getUserPassword || []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        console.log(newName, newPassword);
        const password = {
            id: uuidv4(),
            name: newName,
            password: newPassword
        };
        onAddContact(password);
        //resetForm();
    };

    const mockPasswords = [
        { id: 'id-1', name: 'Rosie Simpson', password: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', password: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', password: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', password: '227-91-26' }
    ];

    const useLocalStorage = (mockPasswords) => {
        const [password, setPassword] = useState(() =>
            JSON.parse(localStorage.getItem(`${user}-passwords`))
        );
        useEffect(() => {
            localStorage.setItem(`${user}-passwords`, JSON.stringify(password));
        }, [password]);
        return [password, setPassword];
    };

    console.log('password', password);

    const onAddContact = (obj) => {
        console.log('obj', obj);
        console.log('password', password);
        setPassword((prevState) => [obj, ...prevState]);
    };

    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'resource':
                setNewName(value);
                console.log('resource', newName);
                break;
            case 'password':
                setNewPassword(value);
                console.log('password', newPassword);
                break;
            default:
        }
    };

    return (
        <>
            <h1>Your password manager</h1>
            <h2>
                {user} {email}
            </h2>
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
                            type="resource"
                            name="resource"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label className={styles.label}>
                        Password
                        <input
                            type="password"
                            name="password"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Save</button>
                </form>
            </div>
        </>
    );
};

export default PasswordList;
