import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogContext from "../../context/logFormContext";
import signinValidationPassed from "../../validations/signinValidation";
import LogForm from "./UserLogForm";

const Register = () => {
    const { inputValueRegister, onChangeRegister}  = useContext(LogContext);
    // const [inputValue, setInputValue] = useState({
    //     username: '',
    //     password: '',
    //     confirmPassword: '',
    //     email: '',
    // });

    // const onChange = (e) => {
    //     setInputValue(() => ({ ...inputValue, [e.target.name]: e.target.value }));
    //     console.log(inputValue);
    // };

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = inputValueRegister;
        if(!signinValidationPassed(true, username, password, confirmPassword, email)){
            return;
        }
        const data = inputValueRegister;


        fetch('http://localhost:4000/users/register', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log('Frontend data: ', data))
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <>
            <h1>Register</h1>
            <form method='POST' onSubmit={onSubmit}>
                <LogForm isRegister={true} inputValue={inputValueRegister} onChange={onChangeRegister}/>
                <ToastContainer />
            </form>
        </>
    )
};

export default Register;