import { useState } from "react";

import './GalleryModal.css'

const FullGallery = ({ spot }) => {
    const [slideIndex, setSlideIndex] = useState(1);


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

                            <img className='img-gallery-styling' src={image.url} key={i} alt={image.url} width='920px' />

                        </div>

                    )
                })}

                <div className='button-div-full-gallery'>

                    <div className="previous-btn">
                        <button id='full-gall-prev' onClick={clickPrev}><i className="fa-solid fa-circle-chevron-left"></i></button>
                    </div>

                    <div className="next-btn">
                        <button id='full-gall-next' onClick={clickNext}><i className="fa-solid fa-circle-chevron-right"></i></button>
                    </div>
                </div>
            </div>

        </>
    )

}
export default FullGallery;
