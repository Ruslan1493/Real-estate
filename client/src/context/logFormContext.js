import React, { createContext, useState } from 'react';

const LogContext = React.createContext('1');

export const LogProvider = (props) => {

    const [inputValue, setInputValue] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

    // const [inputVal, setInputVal]  = useState('123');
    const onChange = (e) => {
        setInputValue(() => ({ ...inputValue, [e.target.name]: e.target.value }));
        console.log(inputValue);
    };

    return (
        <div>
            <LogContext.Provider value={{inputValue, onChange}} >
                {props.children}
            </LogContext.Provider>
        </div>
    )
}

export default LogContext;