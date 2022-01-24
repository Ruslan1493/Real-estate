const LogForm = ({isRegister, inputValue, onChange}) => {
    console.log(isRegister);
    return (
        <>
            <label>
                Username:
                <input name='username' type='text' defaultValue={inputValue['username']} onChange={onChange} />
            </label>
            <label>
                Password:
                <input name='password' type='password' defaultValue={inputValue['password']} onChange={onChange} />
            </label>
            {
                isRegister
                    ?
                    <label>
                        Confirm password:
                        <input name='confirmPassword' type='password' defaultValue={inputValue['confirmPassword']} onChange={onChange} />
                    </label>
                    : null
            }
            <label>
                Email:
                <input name='email' type='text' defaultValue={inputValue['email']} onChange={onChange} />
            </label>
            <button>{isRegister ? 'Register' : 'Login'}</button>
        </>
    )
};

export default LogForm;