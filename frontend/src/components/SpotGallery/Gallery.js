
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getImages } from "../../store/images";

const Gallery = ({ index, spot }) => {
    const spots = Object.values(useSelector(state => state.spot));
    const [slideIndex, setSlideIndex] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getImages(spot.id));
    }, [dispatch])


    return (
        <>
            {spot.previewImage.map((image, i) => {
                return (
                    <div
                        className={slideIndex === i + 1 ? `slide active ${index}` : `slide ${index}`} key={i + `div ${i}`} >
                        <img src={image} key={i} width='300px' className='image-styling' />
                    </div>
                )
            })}
        </>
    )
}


export default Gallery;
