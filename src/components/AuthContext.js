import { useContext, useEffect, useState, createContext } from 'react';

const Context = createContext();
export const useAuth = () => useContext(Context);

const AuthContext = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    const updateUserInfo = (newUserInfo) => {
        setUserInfo(newUserInfo);
        localStorage.setItem('loginData', JSON.stringify(newUserInfo));
    };
    useEffect(() => {
        const value = localStorage.getItem('loginData');
        if (!value) return;
        setUserInfo(JSON.parse(value));
    }, []);

    return (
        <Context.Provider value={{ userInfo, updateUserInfo }}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;
