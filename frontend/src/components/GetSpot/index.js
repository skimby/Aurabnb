import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneSpot } from "../../store/spot";

const GetSpot = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector(state => state.spot.currentSpot);

    //trying to load all spots first then get one by id.
    useEffect(() => {
        dispatch(getOneSpot(spotId));
    }, [dispatch])

    return (
        <>
            <h1>{spot?.name}</h1>
            <p>{spot?.description}</p>
            <p>Price: {spot?.price}</p>
            <p>Ratings: {spot?.avgStarRatings}</p>
            <img src={spot?.images[0].url} alt={spot?.name} />
        </>
    )
}

export default GetSpot;
