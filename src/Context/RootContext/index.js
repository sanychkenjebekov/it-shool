import React, {useState} from 'react';
import {LoginContext} from "../index";

const RootContext = ({children}) => {
    const [login,setLogin] = useState('Неизвестно')
    const [smsValue,setSmsValue] = useState('У вас нету коментарии !')
    const [notification,setNotification] = useState('У вас ещё нету уведомлении !')
    const [notific, setNotific] = useState('У вас нету покупки')
    const [notific2, setNotific2] = useState('0')
    const [notificRed, setNotificRed] = useState(false)

    return (
        <LoginContext.Provider value={{
            login,
            setLogin,
            smsValue,
            setSmsValue,
            notification,
            setNotification,
            notific,
            notific2,
            setNotific,
            setNotific2,
            notificRed,
            setNotificRed
        }}>
            {children}
        </LoginContext.Provider>
    );
};

export default RootContext;