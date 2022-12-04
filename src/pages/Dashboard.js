import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import PasswordList from '../components/PasswordList/PasswordList';
import { useAuth } from '../components/AuthContext';

export default function Tasks() {
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    }, [userInfo, navigate]);

    return (
        <>
            <Helmet>
                <title>Your passwords</title>
            </Helmet>
            <PasswordList />
        </>
    );
}
