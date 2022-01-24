import { toast } from 'react-toastify';
const toastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,

};

const signinValidation = (isRegister, username, email, password, confirmPassword) => {
    const errors = [];
    if (username.length < 3) {
        errors.push('The username should be atleast 3 characters long!');
        // toast.warn('The username should be atleast 3 characters long!', toastOptions)
    }
    else if (username.length > 20) {
        errors.push('The username length should contain maximum of 20 characters!');
        // toast.warn('The username length should contain maximum of 20 characters!', toastOptions)
    }
    else if (password.length > 30) {
        errors.push('The password length should contain maximum of 30 characters!');
        // toast.warn('The password length should contain maximum of 30 characters!', toastOptions)
    }
    else if (password.length < 6) {
        errors.push('The password should be atleast 6 characters long!');
        // toast.warn('The password should be atleast 6 characters long!', toastOptions)
    }
    else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
        errors.push('The entered email is not valid!');
        // toast.warn('The entered email is not valid!', toastOptions)
    }
    if (isRegister) {
        console.log(password)
        console.log(confirmPassword.length)
        if (confirmPassword.length < 6) {
            errors.push('The confirmation password should be atleast 6 characters long!');
            // toast.warn('The confirmation password should be atleast 6 characters long!', toastOptions)
        }
        else if (confirmPassword.length > 30) {
            errors.push('The confirmation password length should be contain maximum of 30 characters!');
            // toast.warn('The confirmation password length should be contain maximum of 30 characters!', toastOptions)
        }
        else if (confirmPassword !== password) {
            errors.push('Both passwords should match!');
            // toast.warn('Both passwords should equal!', toastOptions)
        }
    };
    console.log(errors.length)
    if (errors.length >= 1) {
        toast.warn(errors[0], toastOptions)
    }
};

export default signinValidation;