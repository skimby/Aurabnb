import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useParams, useHistory } from "react-router-dom";
import { getOneSpot } from "../../store/spot";
import SpotForm from "../SpotForm";
import { deleteSpot } from "../../store/spot";
const GetSpot = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector(state => state.spot.currentSpot);
    const history = useHistory();

    const handleClick = () => {
        history.push(`/editSpot`)
    }
    const handleDelete = () => {
        //deletes from state but retains page... fix later ???
        dispatch(deleteSpot());
        history.push(`/`)
    }

    //trying to load all spots first then get one by id.
    useEffect(() => {
        dispatch(getOneSpot(spotId));
    }, [dispatch])

    return (
        <>
            <h1>{spot?.name}</h1>
            <p>{spot?.id}</p>
            <p>{spot?.description}</p>
            <p>Price: {spot?.price}</p>
            <p>Ratings: {spot?.avgStarRatings}</p>
            {/* <img src={spot?.images[0].url} alt={spot?.name} /> */}
            <button onClick={handleClick}>Edit Spot</button>
            <button onClick={handleDelete}>Delete Spot</button>

        </>
    )
}

export default GetSpot;
