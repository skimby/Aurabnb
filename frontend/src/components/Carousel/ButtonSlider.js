import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const ButtonSlider = ({ direction, spotIndex, spot, slideIndex, setSlideIndex }) => {
    const dispatch = useDispatch();

    const nextSlide = () => {
        console.log('next slide button')

        let index = parseInt(spotIndex)
        let allSlides = document.getElementsByClassName(`slide ${index}`)


        if (slideIndex !== allSlides.length) {
            setSlideIndex(slideIndex + 1);


        } else if (slideIndex === allSlides.length) {
            setSlideIndex(1);
            console.log(slideIndex)

        }
    }

    const prevSlide = () => {
        console.log('prev slide button')
        let index = parseInt(spotIndex)
        let allSlides = document.getElementsByClassName(`slide ${index}`)

        if (slideIndex > 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(1);
        }
    }

    return (
        <>
            <button
                className={direction === 'next' ? `btn-slide next ${spotIndex}` : `btn-slide prev ${spotIndex}`}


                onClick={direction === 'next' ? nextSlide : prevSlide}>

                <i className={direction === 'next' ? "fa-solid fa-circle-chevron-right fa-2xl" : "fa-solid fa-circle-chevron-left fa-2xl"}></i>
            </button>

        </>
    )
}
<i class="fa-solid fa-chevron-left"></i>
export default ButtonSlider;
