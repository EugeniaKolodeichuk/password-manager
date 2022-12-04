import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import defaultImg from '../UserMenu/defaultAvatar.png';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
    const navigate = useNavigate();
    const { userInfo, updateUserInfo } = useAuth();
    const avatar = defaultImg;

    const logOut = () => {
        localStorage.removeItem('loginData');
        updateUserInfo(null);
        navigate('/login');
    };

    return (
        <div className={styles.wrapper}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
            <p className={styles.username}>Welcome, {userInfo.user}</p>
            <button
                className={styles.button}
                type="button"
                onClick={() => logOut()}
            >
                Log Out
            </button>
        </div>
    );
};
