import { findAllByDisplayValue } from "@testing-library/react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signinValidation from "../validations/signinValidation";

const Register = () => {
    const notify = () => toast.warn("Wow so easy!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    let [inputValue, setInputValue] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });

    const onChange = (e) => {
        setInputValue(() => ({ ...inputValue, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = inputValue;
        signinValidation(true, username, email, password, confirmPassword);
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
            <h1>Register</h1>
            <form method='POST' onSubmit={onSubmit}>
                <label>
                    Username:
                    <input name='username' type='text' defaultValue={inputValue['username']} onChange={onChange} />
                </label>
                <label>
                    Password:
                    <input name='password' type='password' defaultValue={inputValue['password']} onChange={onChange} />
                </label>
                <label>
                    Confirm password:
                    <input name='confirmPassword' type='password' defaultValue={inputValue['confirmPassword']} onChange={onChange} />
                </label>
                <label>
                    Email:
                    <input name='email' type='text' defaultValue={inputValue['email']} onChange={onChange} />
                </label>
                <button>Register</button>
                <ToastContainer />
            </form>
        </>
    )
};

export default Register;