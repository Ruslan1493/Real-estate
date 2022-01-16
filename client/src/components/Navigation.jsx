import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <>
            <h1>Navigation</h1>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/users/register'>Register</Link>
            </ul>
        </>
    )
};

export default Navigation;