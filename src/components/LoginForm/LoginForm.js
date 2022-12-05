import toast from 'react-hot-toast';
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
            toast.error('Please, register first');
            navigate('/register');
            return;
        }

        const passwordMatch = user.password === form.elements.password.value;

        if (passwordMatch) {
            updateUserInfo(user);
            navigate('/dashboard');
        } else {
            toast.error('Passwords not match');
        }
        form.reset();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Email
                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    autoComplete="off"
                />
            </label>
            <label className={styles.label}>
                Password
                <input
                    className={styles.input}
                    type="password"
                    name="password"
                    autoComplete="off"
                />
            </label>
            <button className={styles.button} type="submit">
                Log In
            </button>
        </form>
    );
};
