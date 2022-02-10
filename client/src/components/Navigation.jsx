import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <h1>Navigation</h1>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/property/create'>Create property</Link>
                <Link to='/users/register'>Register</Link>
                <Link to='/users/login'>Login</Link>
            </ul>
        </>
    )
};

export default Navigation;