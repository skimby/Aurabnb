import { useDispatch } from "react-redux";
import { getOneSpot } from "../../store/spot";
import { useParams } from "react-router-dom";
import { loadAllSpots } from "../../store/spot";

const GetSpot = () => {
    const dispatch = useDispatch();
    const spotId = useParams();
    // const

    //trying to load all spots first then get one by id.
    dispatch(loadAllSpots(spotId));

    return (
        <>
            <h1>Get Spot</h1>
            <h1>{spotId}</h1>
        </>
    )
}

export default GetSpot;
