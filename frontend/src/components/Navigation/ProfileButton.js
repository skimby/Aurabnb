import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';


//accept the user session object (login in data)
function ProfileButton({ user }) {
    const dispatch = useDispatch();
    //set state for the menu, true or false
    const [showMenu, setShowMenu] = useState(false);

    // function that sets the showMenu state to true. why is this not in useeffect?
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    // console.log(user)
    useEffect(() => {
        //if showMenu, set to false, just return, nothing else needs to happen
        if (!showMenu) return;

        //closeMenu function that sets showMenu to false. inside the use effect bc we want to rerender
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
            <div>
                <button className='user-button' onClick={openMenu}>
                    <i className="fa-solid fa-user">Open Menu</i>
                </button>
            </div>
            {/* *** */}
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>{user.firstName}</li>
                    <li>{user.lastName}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
}

// if (sessionUser) return (
//     <button value={showMenu}
//         onClick={handleClick}  >
//         <i className="fa-solid fa-user"></i>
//         Profile Button
//     </button >

// )
// }

export default ProfileButton;
