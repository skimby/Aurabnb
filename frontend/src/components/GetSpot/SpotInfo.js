// import { Link } from "react-router-dom";
//add links later
import "./Reviews.css";

const SpotInfo = ({ spot }) => {
    return (
        <>
            <h2>{spot?.name}</h2>

            <div className="review-header">
                <i className="fa-solid fa-star fa-sm spots-star"></i>
                <h4>{spot?.avgStarRatings} · {spot?.numReviews} reviews  · {spot?.city}, {spot?.state}</h4>
                {/* <h4>{spot?.avgStarRatings.toFixed(1)} · {spot?.numReviews} reviews  · {spot?.city}, {spot?.state}</h4> */}
            </div>

        </>

    )

}
export default SpotInfo;
