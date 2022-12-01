import React, { createContext, FunctionComponent, useState } from 'react';
import { InputValueLogin } from '../components/User/Login';

interface Ipp {
    inputValueRegister: InputValueLogin,
    inputValueLogin: InputValueLogin,
    onChangeRegister: (e: any) => void,
    onChangeLogin: (e: any) => void
}

const LogContext = createContext<Ipp>({
    inputValueRegister: {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    },
    inputValueLogin: {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    },
    onChangeRegister: (e: any) => {},
    onChangeLogin: (e: any) => {}
});

export const LogProvider: FunctionComponent<any> = (props: any) => {

    const [inputValueRegister, setInputValueRegister] = useState<InputValueLogin>({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

    const [inputValueLogin, setInputValueLogin] = useState<InputValueLogin>({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

    const onChangeRegister = (e: any) => {
        setInputValueRegister(() => ({ ...inputValueRegister, [e.target.name]: e.target.value }));
    };

    const onChangeLogin = (e: any) => {
        setInputValueLogin(() => ({ ...inputValueLogin, [e.target.name]: e.target.value }));
    };

    return (
        <div>
            <LogContext.Provider value={{ inputValueRegister, onChangeRegister, inputValueLogin, onChangeLogin }} >
                {props.children}
            </LogContext.Provider>
        </div>
    )
}

export default LogContext;