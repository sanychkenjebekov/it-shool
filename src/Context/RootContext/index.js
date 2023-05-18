import React, {useState} from 'react';
import {LoginContext} from "../index";

const RootContext = ({children}) => {
    const [login,setLogin] = useState('Неизвестно')
    return (
        <LoginContext.Provider value={{
            login,
            setLogin
        }}>
            {children}
        </LoginContext.Provider>
    );
};

export default RootContext;