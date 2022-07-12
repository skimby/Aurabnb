import { getSpotReviews } from "../../store/review";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Reviews = ({ spot }) => {
    const dispatch = useDispatch();
    // console.log(spot)
    // const reviews = Object.values(useSelector(state => state.reviews));
    const reviews = useSelector(state => state.reviews);

    // console.log(reviews)

    // useEffect(() => {
    //     dispatch(getSpotReviews(spot.id))
    // }, [dispatch])

    return (
        <div >
            {/* <h2>{reviews?.id}</h2> */}
        </div>
    )
}
export default Reviews;
