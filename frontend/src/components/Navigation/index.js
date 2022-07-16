import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as sessionActions from '../../store/session';
import './Navigation.css'
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import ProfileButton from "./ProfileButton";
import Logo from './Logo';


const Navigation = ({ isLoaded }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    //set sessionLinks variable
    let sessionLinks;
    //check if the user is logged in, if yes, let the user button appear. Pass in the sessionUser object as a prop
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
        //if the user is not logged in, let 'log in' and 'sign up' links appear
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <SignupFormModal />
            </>
        );
    }
    const handleClick = () => {
        dispatch(sessionActions.demoUser());
        history.push('/');
    }

    return (
        <div className="nav-bar">
            <Logo />
            <ul className='nav-right'>
                <li >
                    <NavLink to="/">
                        <div className='demo-user-box'>
                            <button onClick={handleClick}>Demo User</button>
                        </div>
                    </NavLink>
                </li>
                <li >
                    <NavLink to="/createSpot">
                        <div className='nav-link'>
                            <h4>Become a Host</h4>
                        </div>
                    </NavLink>
                </li>
                <li >
                    {isLoaded && sessionLinks}
                </li>

            </ul>
        </div >
    );
}

export default Navigation;
