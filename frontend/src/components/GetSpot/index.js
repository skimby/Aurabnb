import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getOneSpot, deleteSpot } from "../../store/spot";
import SpotForm from "../SpotForm";
import Reviews from "./Reviews";
import './GetSpot.css'
import SpotInfo from "./SpotInfo";
import SpotGallery from "./SpotGallery";

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
        <div className="spot-container">
            <SpotInfo spot={spot} />
            <SpotGallery spotId={spotId} />


            <Reviews spotId={spotId} />
            <button onClick={handleClick}>Edit Spot</button>
            <button onClick={handleDelete}>Delete Spot</button>

        </div>
    )
}

export default GetSpot;
