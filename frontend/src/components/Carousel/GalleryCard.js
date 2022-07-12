import { useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "./Gallery";
import ButtonSlider from "./ButtonSlider";
import SpotInfo from "./SpotInfo";
import Dots from "./Dots";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOneSpot } from "../../store/spot";

const GalleryCard = ({ spot, index }) => {
    const spots = Object.values(useSelector(state => state.spot));
    const [slideIndex, setSlideIndex] = useState(1);

    console.log(spots)
    const { spotId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getOneSpot(spotId));
        history.push(`/spots/${spotId}`)
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

                <SpotInfo spot={spot} index={index} onClick={handleClick} />

            </div>
        </>
    )
}


export default GalleryCard;
