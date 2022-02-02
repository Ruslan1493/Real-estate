

export const signIn = (isRegister, data) => {
    fetch(`http://localhost:4000/users/${isRegister ? 'register' : 'login'}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json());
};
