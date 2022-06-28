import ProfileButton from "./ProfileButton";
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react-redux";
import * as sessionActions from '../../store/session';
import './Navigation.css'


//passing in the isLoaded state which should be true
const Navigation = ({ isLoaded }) => {
    //setting the current session of user (logged in or not)
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
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </>
        );
    }
    const handleClick = () => {
        // sessionActions.restoreUser();
        <Redirect to='/' />
    }

    return (
        //always return a navlink to the home page
        <div className="nav-bar">
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                    {/* *** what is this doing?  */}
                    {isLoaded && sessionLinks}
                </li>

                <NavLink to="/">
                    <button onClick={handleClick}>Demo User</button>
                </NavLink>
            </ul>
        </div>
    );
}

export default Navigation;
