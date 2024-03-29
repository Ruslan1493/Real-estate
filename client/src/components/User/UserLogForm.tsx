import { ChangeEvent, FunctionComponent } from 'react';
import { InputValueLogin } from '../User/Login';

interface LogFormProps {
    isRegister: boolean,
    inputValue: InputValueLogin,
    inputVal?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    onChangeVal?: (e: ChangeEvent<HTMLInputElement>) => void
}

const LogForm: FunctionComponent<LogFormProps> = ({ isRegister, inputValue, onChange, inputVal, onChangeVal }) => {
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
                    <>
                        <label>
                            Confirm password:
                            <input name='confirmPassword' type='password' defaultValue={inputValue['confirmPassword']} onChange={onChange} />
                        </label>
                        <label>
                            Email:
                            <input name='email' type='text' defaultValue={inputValue['email']} onChange={onChange} />
                        </label>
                    </>
                    : null
            }
            <button>{isRegister ? 'Register' : 'Login'}</button>
        </>
    )
};

export default LogForm;