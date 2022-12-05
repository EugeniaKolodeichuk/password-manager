import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import PasswordList from '../components/PasswordList/PasswordList';
import { useAuth } from '../components/AuthContext';

export default function Dashboard() {
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            navigate('/dashboard');
        } else {
            toast.error('Please, log in');
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
