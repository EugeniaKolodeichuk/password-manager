import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import styles from './Navigation.module.css';

export const Navigation = () => {
    const { userInfo } = useAuth();

    return (
        <nav>
            <NavLink className={styles.link} to="/">
                Home
            </NavLink>
            {userInfo && (
                <NavLink className={styles.link} to="/dashboard">
                    Dashboard
                </NavLink>
            )}
        </nav>
    );
};
