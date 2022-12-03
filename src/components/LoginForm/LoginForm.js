//import { useDispatch } from 'react-redux';
//import { logIn } from 'redux/auth/operations';
import { useEffect, useState } from 'react';
import css from './LoginForm.module.css';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const dispatch = useDispatch();

    const handleSubmit = (e) => {
        console.log('event', e);
        e.preventDefault();
        const form = e.currentTarget.elements;

        const registerList = localStorage.getItem('registerList');
        const isEmailRegistered = JSON.parse(registerList)
            ?.map((value) => value.email)
            .includes(form.email.value);
        const isPasswordRegistered = JSON.parse(registerList)
            ?.map((value) => value.password)
            .includes(form.password.value);

        console.log(
            'length',
            isEmailRegistered,
            isPasswordRegistered,
            registerList
        );

        if (registerList || isEmailRegistered || isPasswordRegistered) {
            console.log('loginUser');
            localStorage.setItem('isLoggedIn', true);
            navigate('/dashboard');
        } else {
            localStorage.setItem(
                'loginData',
                JSON.stringify({
                    email: form.email.value,
                    password: form.password.value
                })
            );
            console.log('!loginUser');
            navigate('/register');
        }
        form.reset();
    };

    /* useEffect(() => {
    console.log('mounting phase', email)
  }, [email]) */

    return (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Email
                <input type="email" name="email" />
            </label>
            <label className={css.label}>
                Password
                <input type="password" name="password" />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
};
