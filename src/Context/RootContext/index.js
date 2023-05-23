import React, {useState} from 'react';
import {LoginContext} from "../index";

const RootContext = ({children}) => {
    const [login,setLogin] = useState('Неизвестно')
    const [smsValue,setSmsValue] = useState('У вас нету коментарии !')
    const [notification,setNotification] = useState('У вас ещё нету уведомлении !')

    return (
        <LoginContext.Provider value={{
            login,
            setLogin,
            smsValue,
            setSmsValue,
            notification,
            setNotification
        }}>
            {children}
        </LoginContext.Provider>
    );
};

export default RootContext;