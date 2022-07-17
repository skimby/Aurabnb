import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css'

//accept the user session object (login in data)
function ProfileButton({ user }) {
    const dispatch = useDispatch();
    //set state for the menu, true or false
    const [showMenu, setShowMenu] = useState(false);


    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

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

    //logout function, executed with 'logout' button is clicked
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <div className="user-button-box">
                <button className='user-button' onClick={openMenu}>
                    <div className="icon">
                        <i className="fa-solid fa-bars fa-xl"></i>
                    </div>
                    <div className="icon">
                        <i className="fa-solid fa-circle-user fa-2xl"></i>
                    </div>
                </button>
            </div>

            {showMenu && (
                <ul className="dropdown">
                    <li>{user?.firstName}</li>
                    <li>{user?.lastName}</li>
                    <li>{user?.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;
