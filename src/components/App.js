import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const DashboardPage = lazy(() => import('../pages/Dashboard'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route
                    path="/register"
                    element={<RegisterPage name="register" />}
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;
