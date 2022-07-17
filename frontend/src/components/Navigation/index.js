import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import * as sessionActions from '../../store/session';
import './Navigation.css'
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import SpotFormModal from '../SpotFormModal';
import ProfileButton from "./ProfileButton";
import Logo from './Logo';


const Navigation = ({ isLoaded }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [newSpot, setNewSpot] = useState(true);

    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
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
                {!sessionUser && (


                    <li >
                        <NavLink to="/">
                            <div className='demo-user-box'>
                                <button onClick={handleClick}>Demo User</button>
                            </div>
                        </NavLink>
                    </li>
                )}
                {sessionUser && (
                    <>
                        <li >
                            <SpotFormModal newSpot={newSpot} />
                            {/* <NavLink to="/createSpot">
                            <div className='nav-link' >
                                <h4>Become a Host</h4>
                            </div>
                        </NavLink> */}
                        </li>
                    </>
                )}
                <li >
                    {isLoaded && sessionLinks}
                </li>

            </ul>
        </div >
    );
}

export default Navigation;
