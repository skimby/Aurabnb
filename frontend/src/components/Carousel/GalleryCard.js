
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getImages } from "../../store/images";
import Gallery from "./Gallery";
import ButtonSlider from "./ButtonSlider";
import SpotInfo from "./SpotInfo";

const GalleryCard = ({ spot, index }) => {
    // const spots = Object.values(useSelector(state => state.spot));
    const [slideIndex, setSlideIndex] = useState(1);
    const dispatch = useDispatch();

    return (
        <>
            <div className="gallery-card">

                <Gallery spot={spot} index={index} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />



                <div className='button-div'>
                    <ButtonSlider className={index} direction={'prev'} spotIndex={index} key={`${index} prev button`} spot={spot} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />

                    <ButtonSlider className={index} direction={'next'} spotIndex={index} key={`${index} next button`} spot={spot} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
                </div>

                <SpotInfo spot={spot} index={index} />

            </div>
        </>
    )
}


export default GalleryCard;
