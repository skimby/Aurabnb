import { getSpotReviews } from "../../store/review";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import EachReview from "./EachReview";
import { getOneSpot } from "../../store/spot";

const Reviews = ({ spotId }) => {
    const dispatch = useDispatch();
    const reviews = Object.values(useSelector(state => state.review));
    const spot = useSelector(state => state.spot.currentSpot);
    // console.log(reviews)
    useEffect(() => {
        dispatch(getSpotReviews(spotId));
        dispatch(getOneSpot(spotId));
    }, [dispatch])

    return (
        <div className="reviews-container">
            <i className="fa-solid fa-star fa-sm"></i>
            <h2>{spot?.avgStarRatings.toFixed(1)} · {spot?.numReviews} Reviews</h2>
            {reviews.map((review, index) => {
                return (
                    <div className='each-review' key={index}>
                        <EachReview review={review} />
                    </div>

                )
            })}
            <h2>{reviews?.id}</h2>
        </div>
    )
}
export default Reviews;
