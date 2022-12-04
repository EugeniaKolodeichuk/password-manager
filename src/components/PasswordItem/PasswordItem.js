import React, { useState, memo } from 'react';
import { useAuth } from '../AuthContext';
import styles from './PasswordItem.module.css';

const PasswordItem = ({ passwordData, savedPasswords, setSavedPasswords }) => {
    const { id, name, password } = passwordData;
    const { userInfo } = useAuth();
    const [passwordShown, setPasswordShown] = useState(false);
    const [newPasswordValue, setNewPasswordValue] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const onDeletePassword = (passwordId) => {
        const updatedPasswords = savedPasswords.filter(
            (password) => password.id !== passwordId
        );

        setSavedPasswords(updatedPasswords);
        localStorage.setItem(
            `${userInfo.user}-passwords`,
            JSON.stringify(updatedPasswords)
        );
    };

    const onRevealPassword = () => {
        setPasswordShown(!passwordShown);
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setNewPasswordValue(value);
    };

    const onEditPassword = () => {
        setPasswordShown(true);
        setIsEdit(true);
    };

    const onSavePassword = () => {
        const editedPassword = savedPasswords.find((item) => item.id === id);
        editedPassword.password = newPasswordValue;

        localStorage.setItem(
            `${userInfo.user}-passwords`,
            JSON.stringify(savedPasswords)
        );

        setPasswordShown(false);
        setIsEdit(false);
    };

    return (
        <li className={styles.item} key={id}>
            <p className={styles.name}> {name}:</p>
            <input
                type={passwordShown ? 'text' : 'password'}
                readOnly={!isEdit}
                name="password"
                maxLength={20}
                defaultValue={password}
                className={styles.input}
                onChange={handleChange}
            />
            <button
                className={styles.button}
                type="button"
                onClick={() => onRevealPassword()}
            >
                Reveal
            </button>
            <button
                className={styles.button}
                type="button"
                onClick={isEdit ? onSavePassword : onEditPassword}
            >
                {isEdit ? 'Save' : 'Edit'}
            </button>
            <button
                className={styles.button}
                type="button"
                onClick={() => onDeletePassword(id)}
            >
                Delete
            </button>
        </li>
    );
};

export default memo(PasswordItem);
