import React, { createContext, useState } from 'react';

const LogContext = createContext(null);

export const LogProvider = (props) => {

    const [inputValueRegister, setInputValueRegister] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

    const [inputValueLogin, setInputValueLogin] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

    const onChangeRegister = (e) => {
        setInputValueRegister(() => ({ ...inputValueRegister, [e.target.name]: e.target.value }));
    };

    const onChangeLogin = (e) => {
        setInputValueLogin(() => ({ ...inputValueLogin, [e.target.name]: e.target.value }));
    };

    return (
        <div>
            <LogContext.Provider value={{inputValueRegister, onChangeRegister, inputValueLogin, onChangeLogin}} >
                {props.children}
            </LogContext.Provider>
        </div>
    )
}

export default LogContext;