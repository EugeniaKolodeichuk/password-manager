import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../AuthContext';
import styles from './PasswordForm.module.css';

const PasswordForm = ({ savedPasswords, setSavedPasswords }) => {
    const { userInfo } = useAuth();
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');

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

    const onAddContact = (passwordData) => {
        const isExist = savedPasswords.find(
            (password) => password.name === passwordData.name
        );

        if (isExist) {
            toast.error(`Resource ${passwordData.name} exists`);
            return;
        }

        const savedPasswordList = [passwordData, ...savedPasswords];
        setSavedPasswords(savedPasswordList);

        localStorage.setItem(
            `${userInfo.user}-passwords`,
            JSON.stringify(savedPasswordList)
        );
        toast.success(
            `Resource ${passwordData.name} has been added successfully`
        );
    };

    return (
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
                Add password
            </button>
        </form>
    );
};

export default PasswordForm;
