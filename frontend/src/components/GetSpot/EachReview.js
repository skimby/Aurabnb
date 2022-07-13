import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getUserReviews, deleteUserReview } from "../../store/review";

const EachReview = ({ review }) => {
    const user = useSelector(state => state.session.user);
    const [isUser, setIsUser] = useState(false);

    const dateMonth = new Date(review.createdAt).getMonth();
    const dateYear = new Date(review.createdAt).getFullYear();
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dispatch = useDispatch();
    // console.log(user);

    useEffect(() => {
        console.log(user.id)
        console.log(review.id)
        console.log(review)

        if (user.id === review?.userId) {
            setIsUser(true);
        }
    }, []);

    const handleClick = async (e) => {
        e.preventDefault();
        await dispatch(deleteUserReview(review?.id));
    }

    return (
        <>
            <div className="user-info">
                <h3>{review.User.firstName}</h3>
                <h4>{monthArr[dateMonth]} {dateYear}</h4>
            </div>
            <div className="review">
                <p>{review.review}</p>
            </div>
            {/* renders after one refresh ??? */}
            {isUser && (
                <button onClick={handleClick}>Delete Review</button>)}
        </>
    )
}
export default EachReview;
