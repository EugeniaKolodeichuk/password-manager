import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
    const { updateUserInfo } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const registerList = JSON.parse(
            localStorage.getItem('registerList') || '[]'
        );

        const form = e.currentTarget;

        const registerData = {
            user: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        };

        registerList.push(registerData);

        localStorage.setItem('registerList', JSON.stringify(registerList));
        localStorage.setItem('loginData', JSON.stringify(registerData));

        form.reset();
        updateUserInfo(registerData);
        navigate('/dashboard');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Username
                <input type="text" name="name" required autoComplete="off" />
            </label>
            <label className={styles.label}>
                Email
                <input type="email" name="email" required autoComplete="off" />
            </label>
            <label className={styles.label}>
                Password
                <input
                    type="password"
                    name="password"
                    required
                    autoComplete="off"
                />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};
