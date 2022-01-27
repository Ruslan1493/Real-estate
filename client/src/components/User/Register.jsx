import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogContext from "../../context/logFormContext";
import signinValidation from "../../validations/signinValidation";
import LogForm from "./UserLogForm";

const Register = () => {
    const { inputValue, onChange}  = useContext(LogContext);
    console.log(inputValue);
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
        const { username, email, password, confirmPassword } = inputValue;
        signinValidation(true, username, email, password, confirmPassword);
        const data = inputValue;


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
                <LogForm isRegister={true} inputValue={inputValue} onChange={onChange}/>
                <ToastContainer />
            </form>
        </>
    )
};

export default Register;