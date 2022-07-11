import './SpotInfo.css';

const SpotInfo = ({ spot, index }) => {

    return (
        // <div className="spots-body">
        //     <h3>{spot?.name}</h3>

        //     <p>Price: {spot?.price}</p>
        //     <p>Ratings: {spot?.avgStarRatings}</p>

        <div className="spots-body" key={spot?.id}>

            {/* <img className='img-styling' src={spot?.previewImage[0]} alt={spot?.name} key={spot?.id + 'image'} /> */}


            <div className='spot-card-header' key={spot?.id + 'card'}>

                <h3 key={spot?.id + 'location'}>
                    {`${spot?.city}, ${spot?.state}`}</h3>
            </div>

            <div className='header' key={spot?.id + 'rating'}>
                <i className="fa-solid fa-star fa-sm" key={spot?.id + 'star'}></i>
                <h3 key={spot?.id + 'test'}>{spot?.avgStarRating}test</h3>
            </div>


            <h3 key={spot?.id + 'price'}>
                {`$${spot?.price} night`}
            </h3>
        </div>

        // </div >
    )
}

export default SpotInfo;
