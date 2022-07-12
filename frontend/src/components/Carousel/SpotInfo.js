import './SpotInfo.css';
import { useHistory } from "react-router-dom";


const SpotInfo = ({ spot, index }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/spots/${spot.id}`)
    }
    return (
        <div className="spots-body" key={spot?.id} onClick={handleClick}>

            <div className='spot-card-header' key={spot?.id + 'card'}>
                <h3 key={spot?.id + 'location'}>
                    {`${spot?.city}, ${spot?.state}`}</h3>
            </div>

            <div className='header' key={spot?.id + 'rating'}>
                <i className="fa-solid fa-star fa-sm" key={spot?.id + 'star'}></i>
                <h3 key={spot?.id + 'test'}>{spot?.avgStarRating}test</h3>
            </div>

            <h4 key={spot?.id + 'price'}>
                {<span className='bolded-price'>${spot?.price} </span>}
                night
            </h4>
        </div>
    )
}

export default SpotInfo;
