import { useSelector } from "react-redux";

const ProfileButton = () => {
    const sessionUser = useSelector(state => state.session.user)

    if (sessionUser) return (
        <button>
            <i className="fa-solid fa-user"></i>
            Profile Button
        </button>
    )
}

export default ProfileButton;
