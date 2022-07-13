import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getOneSpot, deleteOneSpot } from "../../store/spot";
import Reviews from "./Reviews";
import './GetSpot.css'
import SpotInfo from "./SpotInfo";
import SpotGallery from "./SpotGallery";

const GetSpot = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const user = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spot.currentSpot);
    const history = useHistory();
    const [userOwned, setUserOwned] = useState();



    const handleClick = () => {
        history.push(`/editSpot`)
    }

    const handleDelete = async () => {
        //deletes from state but retains page... fix later ???
        await dispatch(deleteOneSpot(parseInt(spotId)));
        history.push(`/`)
    }

    useEffect(() => {
        if (spotId) {
            dispatch(getOneSpot(parseInt(spotId)));
        }
    }, [dispatch, spotId]);

    useEffect(() => {
        if (user && spot) {
            if (user.id === spot.ownerId) {
                setUserOwned(true)
            }
        }
    }, [user, spot])


    return (
        <div className="spot-container">
            <SpotInfo spot={spot} />
            <SpotGallery spotId={spotId} />
            <Reviews spotId={spotId} />
            {userOwned && (
                <>
                    <button onClick={handleClick}>Edit Spot</button>
                    <button onClick={handleDelete}>Delete Spot</button>
                </>
            )}

        </div>
    )
}

export default GetSpot;
