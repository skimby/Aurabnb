import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import * as sessionActions from '../../store/session';
import './Navigation.css'
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import SpotFormModal from '../SpotFormModal';
import logo from '../../images/airbnb-logo.png';


const Navigation = ({ isLoaded }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [newSpot, setNewSpot] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;



    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        //if the document is clicked, call closeMenu function
        document.addEventListener('click', closeMenu);

        //return cb function that removes event listener ???
        //just want the event listened to take effect once and then stop
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    //logout function, executed with 'logout' button is clicked
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    const handleClick = () => {
        dispatch(sessionActions.demoUser());
        history.push('/');
    }
    const clickLogo = () => {
        history.push('/');
    }

    return (
        <>
            <div className="nav-bar">
                {/* LEFT DIV | LOGO BOX*/}
                <ul className='nav-left'>
                    <li >
                        <div className='logo-box' onClick={clickLogo}>
                            <img src={logo} alt='airbnb logo' width='100%' />
                        </div>
                    </li>
                </ul>

                {/* RIGHT DIV | BUTTONS/PROFILE BOX*/}
                <ul className='nav-right'>

                    {/* IF NOT LOGGED IN ... */}
                    {isLoaded && !sessionUser && (
                        <>
                            <li >
                                <NavLink to="/">
                                    <div className='demo-user-box'>
                                        <button onClick={handleClick}>Demo User</button>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <LoginFormModal />
                            </li>
                            <li>
                                <SignupFormModal />
                            </li>
                        </>
                    )}

                    {/* IF LOGGED IN ... */}
                    {isLoaded && sessionUser && (
                        <>
                            <li >
                                <SpotFormModal newSpot={newSpot} />
                            </li>

                            <li>
                                <div className="user-button-box">
                                    <button className='user-button' onClick={openMenu}>
                                        <div className="icon">
                                            <div className='icon-details'>
                                                <i className="fa-solid fa-bars fa-xl"></i>
                                            </div>
                                        </div>

                                        <div className="icon">
                                            <div className='icon-details'>
                                                <i className="fa-solid fa-circle-user fa-2xl"></i>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </li>
                        </>
                    )}
                </ul>
            </div>

            {showMenu && (
                <div className='dropdown-container'>
                    <div className='dd-box'>
                        <ul className="dropdown">
                            <li>{sessionUser?.firstName}</li>
                            <li>{sessionUser?.lastName}</li>
                            <li>{sessionUser?.email}</li>
                            <li>
                                <button onClick={logout}>Log Out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

        </>
    );
}

export default Navigation;
