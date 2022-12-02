import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

export default function Register(props) {
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
