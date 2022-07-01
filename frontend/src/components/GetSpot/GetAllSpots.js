// import { loadAllSpots } from "../../store/spot"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const GetAllSpots = () => {
    const dispatch = useDispatch();
    const spots = Object.values(useSelector(state => state.spot));

    console.log(spots)
    useEffect(() => {
        // dispatch(loadAllSpots(spots));
    }, [dispatch])

    return (
        <>
            <h1>Get all spots loading page</h1>
            {spots.map(spot => {
                return (
                    <h3 key={spot.id}>{spot.name}</h3>
                )
            })}
        </>
    )
}

export default GetAllSpots;
