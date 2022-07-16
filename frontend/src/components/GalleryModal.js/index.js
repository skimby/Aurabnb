import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";

import { getOneSpot } from "../../store/spot"
import { Modal } from "../../context/Modal";

const GalleryModal = () => {
    const dispatch = useDispatch();
    let { spotId } = useParams();
    spotId = parseInt(spotId);

    const spot = useSelector(state => state.spot.currentSpot);

    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        dispatch(getOneSpot(spotId));
    }, [dispatch, spotId]);

    return (
        <>
            <div className='gallery-fullscreen'>
                {spot?.images.map((image, index) => {
                    return (
                        <img src={image.url} key={index} alt={image.url} />

                    )
                })}
            </div>
            <button onClick={() => setShowModal(true)}></button>
            {showModal && (
                <Modal />
            )}
        </>
    )

}

export default GalleryModal;
