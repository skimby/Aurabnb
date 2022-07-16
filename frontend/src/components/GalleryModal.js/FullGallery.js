import { useState } from "react";
import { useParams } from "react-router-dom";

import './GalleryModal.css'

const FullGallery = ({ spot }) => {
    let { spotId } = useParams();
    spotId = parseInt(spotId);

    const [slideIndex, setSlideIndex] = useState(1);


    return (
        <>
            <div className='gallery-fullscreen'>
                {spot?.images.map((image, i) => {
                    return (
                        <>
                            <div
                                className={slideIndex === i + 1 ? `slide2 active2 ${i}` : `slide2 ${i}`} key={i + `div ${i}`} >

                                <img className='img-gallery-styling' src={image.url} key={i} alt={image.url} />

                            </div>
                        </>
                    )
                })}
            </div>

        </>
    )

}
export default FullGallery;
