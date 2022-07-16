import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadAllSpots } from "../../store/spot";

import GalleryCard from "./GalleryCard";
import './SpotGallery.css';

const Carousel = () => {
    const dispatch = useDispatch();

    const spots = Object.values(useSelector(state => state.spot));

    useEffect(() => {
        if (spots?.currentSpot) {
            delete spots[spots?.length - 1];
        }
    }, [spots])
    useEffect(() => {
        dispatch(loadAllSpots());
    }, [dispatch])

    return (
        <>
            {spots && spots?.length > 2 && (
                <div className='spot-carousel'>
                    {spots?.map((spot, index) => {
                        return (
                            <GalleryCard spot={spot} index={index} key={index} />
                        )
                    })}
                </div>

            )}
        </>
    )
}

export default Carousel;
