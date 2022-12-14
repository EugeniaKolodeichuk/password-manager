import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { useAuth } from '../components/AuthContext';

export default function Login() {
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            toast.error('You are already logged in');
            navigate('/dashboard');
        }
    }, [userInfo, navigate]);

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm />
        </div>
    );
}
