import { useContext, FunctionComponent } from "react";
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signIn } from '../../services/userServices';
import signinValidationPassed, { toastOptions } from "../../validations/signinValidation";
import LogForm from "./UserLogForm";
import LogContext from '../../context/logFormContext';

export interface InputValueLogin{
    username: string,
    password: string,
    confirmPassword: string,
    email: string
}

const Login: FunctionComponent = () => {
    const { inputValueLogin, onChangeLogin } = useContext<any|null>(LogContext);

    const onSubmit = (e: any) => {
        e.preventDefault();
        const { username, password } = inputValueLogin;
        if (!signinValidationPassed(false, username, password)) {
            return;
        }
        const data: InputValueLogin = inputValueLogin;
        console.log('in login func')

        signIn(false, data)
            .then(data => {
                console.log('Frontend data: ', data)
                if (data.hasError) {
                    // const t: ToastOptions<{}> = toastOptions;
                    toast.warn(data.message, toastOptions as ToastOptions<{}>);
                    return;
                }
            })
            .catch((err: string) => {
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