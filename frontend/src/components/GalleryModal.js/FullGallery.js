import { useState } from "react";
import { useParams } from "react-router-dom"

import './GalleryModal.css'

const FullGallery = ({ spot }) => {
    let { spotId } = useParams();
    spotId = parseInt(spotId);

    const [slideIndex, setSlideIndex] = useState(1);
    console.log(slideIndex)
    const clickPrev = () => {
        if (slideIndex > 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(1);
        }
    }
    const clickNext = () => {

        let allSlides = document.getElementsByClassName(`slide2`)

        if (slideIndex !== allSlides.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === allSlides.length) {
            setSlideIndex(1);
        }
    }

    return (
        <>
            <div className='gallery-fullscreen'>
                {spot?.images.map((image, i) => {
                    return (

                        <div
                            className={slideIndex === i + 1 ? `slide2 active2 ${i + 1}` : `slide2 ${i + 1}`} key={i + `div ${i}`} >

                            <img className='img-gallery-styling' src={image.url} key={i} alt={image.url} width='800px' />

                        </div>

                    )
                })}

                <div className='button-div-full-gallery'>

                    <div className="previous-btn">
                        <button onClick={clickPrev}><i className="fa-solid fa-circle-chevron-left"></i></button>
                    </div>

                    <div className="next-btn">
                        <button onClick={clickNext}><i className="fa-solid fa-circle-chevron-right"></i></button>
                    </div>
                </div>
            </div>

        </>
    )

}
export default FullGallery;
