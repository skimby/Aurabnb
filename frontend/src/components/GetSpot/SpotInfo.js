import "./Reviews.css";

const SpotInfo = ({ spot }) => {
    return (
        <>
            {/* <div className="review-header"> */}
            <h2>{spot?.name}</h2>

            <div className="review-header">
                <i className="fa-solid fa-star fa-sm"></i>
                <h4>{spot?.avgStarRatings} · {spot?.numReviews} Reviews  · {spot?.city}, {spot?.state}</h4>
            </div>



            {/* <h2>{spot?.name}</h2>
            <p>{spot?.id}</p>
            <p>{spot?.description}</p>
            <p>Price: {spot?.price}</p>
            <p>Ratings: {spot?.avgStarRatings}</p> */}
        </>

    )

}
export default SpotInfo;
