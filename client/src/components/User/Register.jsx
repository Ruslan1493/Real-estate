import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogContext from "../../context/logFormContext";
import { signIn } from "../../services/userServices";
import signinValidationPassed, { toastOptions } from "../../validations/signinValidation";
import LogForm from "./UserLogForm";

const Register = () => {
    const { inputValueRegister, onChangeRegister } = useContext(LogContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = inputValueRegister;
        if (!signinValidationPassed(true, username, password, confirmPassword, email)) {
            return;
        }
        const data = inputValueRegister;

        signIn(true, data)
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
            <h1>Register</h1>
            <form method='POST' onSubmit={onSubmit}>
                <LogForm isRegister={true} inputValue={inputValueRegister} onChange={onChangeRegister} />
                <ToastContainer />
            </form>
        </>
    )
};

export default Register;