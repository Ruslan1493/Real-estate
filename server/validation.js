

const checkUserData = (username, password, confirmPassword, email, isRegister) => {
    let errorMessage = '';
    let validationPassed = false;
    if (username.length < 6 || username.length > 20) {
        return {
            errorMessage: 'Username length is either less thatn 6 or bigger than 20',
            validationPassed: false
        }
    } else if (password.length < 6 || password.length > 30) {
        return {
            errorMessage: 'Password length is either less thatn 6 or bigger than 30',
            validationPassed: false
        }
    } else if (email.length < 9 || email.length > 40) {
        return {
            errorMessage: 'Email length is either less thatn 9 or bigger than 40',
            validationPassed: false
        }
    } else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
        return {
            errorMessage: 'The email is not valid',
            validationPassed: false
        }
    };
    if (isRegister) {
        if (confirmPassword.length < 6 || confirmPassword.length > 30) {
            return {
                errorMessage: 'Password length is either less thatn 6 or bigger than 30',
                validationPassed: false
            }
        }
    };
    if (confirmPassword !== password) {
        return {
            errorMessage: 'Both passwords should match!',
            validationPassed: false
        }
    };
    validationPassed = true;
    return {
        errorMessage: '',
        validationPassed
    };
};

module.exports = checkUserData;