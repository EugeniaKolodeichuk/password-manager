import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
    const navigate = useNavigate();
    const { updateUserInfo } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        const registerList = JSON.parse(
            localStorage.getItem('registerList') || '[]'
        );

        const user = registerList.find(
            (item) => item.email === form.elements.email.value
        );

        if (!user) {
            navigate('/register');
            return;
        }

        const passwordMatch = user.password === form.elements.password.value;

        if (passwordMatch) {
            updateUserInfo(user);
            navigate('/dashboard');
        } else {
            alert('Passwords not match');
        }
        form.reset();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Email
                <input type="email" name="email" autoComplete="off" />
            </label>
            <label className={styles.label}>
                Password
                <input type="password" name="password" autoComplete="off" />
            </label>
            <button type="submit">Log In</button>
        </form>
    );
};
