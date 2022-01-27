import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signinValidation from "../../validations/signinValidation";
import LogForm from "./UserLogForm";
import LogContext, { LogProvider } from '../../context/logFormContext';

const Login = () => {
    // let { value } = useContext(LogContext);

    // console.log(value)
    let [inputValue, setInputValue] = useState({
        username: '',
        password: '',
        email: '',
    });

    const onChange = (e) => {
        setInputValue(() => ({ ...inputValue, [e.target.name]: e.target.value }));
        console.log(inputValue);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = inputValue;
        signinValidation(true, username, email, password);
        const data = inputValue;
        // fetch('http://localhost:4000/users/register', {
        //     method: 'POST',

        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(res => res.json())
        // .then(data => console.log('Frontend data: ', data))
        // .catch(err => {
        //     console.log(err);
        // });
    };

    return (
        <>
                {/* <LogContext.Consumer> */}
                    <h1>Login</h1>
                    <form method='POST' onSubmit={onSubmit}>

                        <LogForm isRegister={false} inputValue={inputValue} onChange={onChange} />
                        <ToastContainer />
                    </form>
                {/* </LogContext.Consumer> */}
        </>
    )
};

export default Login;