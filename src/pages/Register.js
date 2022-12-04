import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export default function Register(props) {
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            navigate('/dashboard');
        }
    }, [userInfo]);

    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <h1>{props.name}</h1>
            <RegisterForm />
        </div>
    );
}
