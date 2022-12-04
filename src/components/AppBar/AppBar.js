import { useAuth } from '../AuthContext';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import styles from './AppBar.module.css';

export const AppBar = () => {
    const { userInfo } = useAuth();

    return (
        <header className={styles.header}>
            <Navigation />
            {userInfo ? <UserMenu /> : <AuthNav />}
        </header>
    );
};
