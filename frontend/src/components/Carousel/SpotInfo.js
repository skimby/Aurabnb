

const SpotInfo = ({ spot, index }) => {

    return (
        <div className="spots-body">
            <h3>{spot?.name}</h3>

            <p>Price: {spot?.price}</p>
            <p>Ratings: {spot?.avgStarRatings}</p>


        </div>
    )
}

export default SpotInfo;
