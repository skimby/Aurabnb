import ProfileButton from "./ProfileButton";
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import logo from '../../images/airbnb-logo.png';
import './Navigation.css'
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

const Navigation = ({ isLoaded }) => {

    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

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

        <Redirect to='/' />
    }

    return (
        //always return a navlink to the home page
        <div className="nav-bar">

            <ul className='nav-left'>
                <li>
                    <NavLink exact to="/">
                        <div className='logo-box'>
                            <img src={logo} alt='airbnb logo' width='100%' />
                        </div>
                    </NavLink>
                </li>
            </ul>

            <ul className='nav-right'>
                {/* conditionally rendering if isLoaded is truthy */}
                <li>
                    {isLoaded && sessionLinks}
                </li>
                {/* <li> */}
                {/* <NavLink exact to="/">Home</NavLink> */}
                {/* *** what is this doing?  */}
                {/* {isLoaded && sessionLinks} */}
                {/* </li> */}
                <li>
                    <NavLink to="/">
                        <div className='demo-user-box'>
                            <button onClick={handleClick}>Demo User</button>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
