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
        <div className="spots-grid">

            {spots?.map(spot => {
                console.log(spot)
                return (
                    <div className="spot-card" key={spot?.id}>
                        <img className='img-styling' src={spot?.previewImage[0]} alt={spot?.name} />


                        <div className='spot-card-header'>
                            <div>
                                <h3>{`${spot?.city}, ${spot?.state}`}</h3>
                            </div>
                            <div className='header'>
                                <h3>{spot?.avgStarRating}test</h3>
                                <i class="fa-solid fa-star fa-sm" ></i>
                            </div>
                        </div>
                        <h4></h4>

                        <h3>{`$${spot?.price} night`}</h3>
                    </div>
                )
            })
            }

        </div>

    )

}

export default GetAllSpots;
