import { useState } from "react";

const Register = () => {
    let [inputValue, setInputValue] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const onChange = (e) => {
        setInputValue(() => ({ ...inputValue, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const data = inputValue;
        fetch('http://localhost:4000/users/register', {
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => console.log(res))
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <>
            <h1>Register</h1>
            <form method='POST' onSubmit={onSubmit}>
                <label>
                    Username:
                    <input name='username' type='text' value={inputValue['username']} onChange={onChange} />
                </label>
                <label>
                    Password:
                    <input name='password' type='password' value={inputValue['password']} onChange={onChange} />
                </label>
                <label>
                    Confirm password:
                    <input name='confirmPassword' type='password' value={inputValue['confirmPassword']} onChange={onChange} />
                </label>
                <button>Register</button>
            </form>
        </>
    )
};

export default Register;