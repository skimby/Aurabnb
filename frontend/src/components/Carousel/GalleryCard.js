import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "./Gallery";
import ButtonSlider from "./ButtonSlider";
import SpotInfo from "./SpotInfo";
import Dots from "./Dots";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";


const GalleryCard = ({ spot, index }) => {
    const [slideIndex, setSlideIndex] = useState(1);

    const { spotId } = useParams();

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {

        history.push(`/spots/${spot?.id}`)
    }


    return (
        <>
            <div className="gallery-card" >

                <Gallery spot={spot} index={index} slideIndex={slideIndex} setSlideIndex={setSlideIndex} onClick={handleClick} />

                <div className='container-dots'>
                    <Dots slideIndex={slideIndex} spot={spot} />
                </div>

                <div className='button-div'>
                    <ButtonSlider className={index} direction={'prev'} spotIndex={index} key={`${index} prev button`} spot={spot} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />

                    <ButtonSlider className={index} direction={'next'} spotIndex={index} key={`${index} next button`} spot={spot} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
                </div>

                <SpotInfo spot={spot} spotId={spotId} index={index} onClick={handleClick} />

            </div>
        </>
    )
}


export default GalleryCard;
