import './SpotInfo.css';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getOneSpot } from '../../store/spot';
import { useEffect } from 'react';
import { getSpotReviews } from '../../store/review';

const SpotInfo = ({ spot, index }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.review)
    const eachSpot = useSelector(state => state.spot.currentSpot);

    const handleClick = () => {
        history.push(`/spots/${spot.id}`);
    }

    useEffect(() => {
        dispatch(getOneSpot(spot.id));
    }, [dispatch]);

    return (
        <div className="spots-body" key={spot?.id} onClick={handleClick}>

            <div className='spot-card-header' key={spot?.id + 'card'}>
                <h3 key={spot?.id + 'location'}>
                    {`${spot?.city}, ${spot?.state}`}</h3>
            </div>

            <div className='header' key={spot?.id + 'rating'}>

                <div className='star-icon-box'>
                    <i className="fa-solid fa-star fa-sm" key={spot?.id + 'star'}></i>
                </div>

                <div className='rating-box'>
                    <h4 key={spot?.id + 'test'}>{eachSpot?.avgStarRatings}</h4>
                </div>

            </div>

            <h4 key={spot?.id + 'price'}>
                ${spot?.price} night</h4>

        </div>
    )
}

export default SpotInfo;
