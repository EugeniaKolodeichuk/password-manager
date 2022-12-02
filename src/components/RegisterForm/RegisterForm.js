import css from './RegisterForm.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
    const loginData = localStorage.getItem('loginData');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (loginData) {
            const parsedData = JSON.parse(loginData);
            setEmail(parsedData.email);
            setPassword(parsedData.password);

            console.log('parsed data', email);
        }
    }, [email, password]);

    const handleSubmit = (e) => {
        console.log('event2', e);
        e.preventDefault();
        const registerList = localStorage.getItem('registerList');
        const form = e.currentTarget;
        const registerData = {
            user: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        };

        localStorage.setItem('registerList', JSON.stringify([registerData]));
        localStorage.setItem('loginData', JSON.stringify(registerData));

        form.reset();
        navigate('/dashboard');
    };

    return (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Username
                <input type="text" name="name" />
            </label>
            <label className={css.label}>
                Email
                <input type="email" name="email" defaultValue={email} />
            </label>
            <label className={css.label}>
                Password
                <input
                    type="password"
                    name="password"
                    defaultValue={password}
                />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};
