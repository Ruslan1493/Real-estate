import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import style from './Navigation.module.scss';

const Navigation: FunctionComponent = () => {
    return (
        <>
            <div className={style.navigation}>
                <h1>Navigation</h1>
                <ul className={style.nav_list}>
                    <Link to='/'>Home</Link>
                    <Link to='/property/create'>Create property</Link>
                    <Link to='/users/register'>Register</Link>
                    <Link to='/users/login'>Login</Link>
                </ul>
            </div>
        </>
    )
};

export default Navigation;