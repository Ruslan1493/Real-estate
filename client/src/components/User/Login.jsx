import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from '../../services/userServices';
import signinValidationPassed, { toastOptions } from "../../validations/signinValidation";
import LogForm from "./UserLogForm";
import LogContext from '../../context/logFormContext';

const Login = () => {
    const { inputValueLogin, onChangeLogin } = useContext(LogContext);
    // console.log(value)
    // let [inputValue, setInputValue] = useState({
    //     username: '',
    //     password: '',
    //     email: '',
    // });

    // const onChange = (e) => {
    //     setInputValue(() => ({ ...inputValue, [e.target.name]: e.target.value }));
    //     console.log(inputValue);
    // };

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = inputValueLogin;
        if (!signinValidationPassed(false, username, password)) {
            return;
        }
        const data = inputValueLogin;
        console.log('in login func')
        // fetch('http://localhost:4000/users/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
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