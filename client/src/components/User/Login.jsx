import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from '../../services/userServices';
import signinValidationPassed, { toastOptions } from "../../validations/signinValidation";
import LogForm from "./UserLogForm";
import LogContext from '../../context/logFormContext';

const Login = () => {
    const { inputValueLogin, onChangeLogin } = useContext(LogContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = inputValueLogin;
        if (!signinValidationPassed(false, username, password)) {
            return;
        }
        const data = inputValueLogin;
        console.log('in login func')
  
        signIn(false, data)
            .then(data => {
                console.log('Frontend data: ', data)
                if (data.hasError) {
                    toast.warn(data.message, toastOptions);
                    return;
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <h1>Login</h1>
            <form method='POST' onSubmit={onSubmit}>

                <LogForm isRegister={false} inputValue={inputValueLogin} onChange={onChangeLogin} />
                <ToastContainer />
            </form>
        </>
    )
};

export default Login;