// import { loadAllSpots } from "../../store/spot"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import './GetAllSpots.css';

const GetAllSpots = () => {
    const dispatch = useDispatch();
    const spots = Object.values(useSelector(state => state.spot));

    // console.log(spots)
    useEffect(() => {
        // dispatch(loadAllSpots(spots));
    }, [dispatch])

    return (
        <>
            <div className="spots-grid">

                {spots?.map(spot => {
                    console.log(spot)
                    return (
                        <div className="spot-card">
                            <img src={spot?.previewImage[0]} alt={spot?.name} />
                            <h3 key={spot?.id}>{spot?.name}</h3>

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default GetAllSpots;
