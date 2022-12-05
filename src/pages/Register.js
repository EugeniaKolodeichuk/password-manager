import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export default function Register() {
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            toast.error('You are already registered');
            navigate('/dashboard');
        }
    }, [userInfo, navigate]);

    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm />
        </div>
    );
}
