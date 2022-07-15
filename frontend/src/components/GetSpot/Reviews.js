import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { getUsersBookings } from "../../store/booking";
import { deleteUserReview } from "../../store/review";

const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



const Reviews = ({ review, spot }) => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user);
    const bookings = Object.values(useSelector(state => state.booking))

    const [isUser, setIsUser] = useState(false);
    const [dateMonth, setDateMonth] = useState(null);
    const [dateYear, setDateYear] = useState(null);
    const [bookedUser, setBookedUser] = useState(false);

    useEffect(() => {
        if (review) {
            setDateMonth(new Date(review.createdAt).getMonth());
            setDateYear(new Date(review.createdAt).getFullYear());
        }
    }, [review]);

    useEffect(() => {
        if (user?.id === review?.userId) {
            setIsUser(true);
        } else {
            setIsUser(false)
        }
    }, [user, review]);

    useEffect(() => {
        dispatch(getUsersBookings(user.id))
    }, [dispatch, user])


    useEffect(() => {
        if (spot && bookings) {
            const hasBooked = bookings.find(booking => spot.id === booking.spotId
            );
            if (hasBooked) {
                setBookedUser(true);
            } else {
                setBookedUser(false);
            }
        }
    }, [bookedUser, spot, bookings])


    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(deleteUserReview(review?.id));
    }

    return (
        <>
            <div className="user-info">
                <h3>{review?.User?.firstName}</h3>
                {dateMonth && dateYear && (
                    <h4>{monthArr[dateMonth]} {dateYear}</h4>
                )}
            </div>
            <div className="review">
                <p>{review?.review}</p>
            </div>

            {isUser && (
                <button onClick={handleDelete}>Delete Review</button>)}

        </>
    )
}
export default Reviews;
