

export const signIn = (isRegister, data) => {

    return fetch(`http://localhost:4000/users/${isRegister ? 'register' : 'login'}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json());
};

export const getAllProperties = () => {
    return fetch('http://localhost:4000/property')
        .then(res => res.json())
};

export const createProperty = (data) => {
    return fetch('http://localhost:4000/property/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
};