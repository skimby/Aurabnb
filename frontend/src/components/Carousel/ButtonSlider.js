import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getImages } from "../../store/images";
// heres where i am:
// trying to have each button be a separate function. i think problem now is the , SlideIndex, setSlideIndext state is associated with all galleries not just one. TRY MAKING THE GALLERY CARD A SEPARATE COMPONENTS WITH SEPARATE STATE FOR THE GALLERY AND BUTTON SO EACH THING IS SEPARATE

const ButtonSlider = ({ direction, spotIndex, spot, slideIndex, setSlideIndex }) => {

    // const [slideIndex, setSlideIndex] = useState(1);
    const dispatch = useDispatch();

    const nextSlide = () => {
        let index = parseInt(spotIndex)

        let allSlides = document.getElementsByClassName(`slide ${index}`)
        console.log(allSlides);

        console.log(slideIndex)

        if (slideIndex !== allSlides.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === allSlides.length) {
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        let index = parseInt(spotIndex)
        let allSlides = document.getElementsByClassName(`slide ${index}`)
        console.log(allSlides);
        console.log(slideIndex)



        if (slideIndex !== allSlides.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === allSlides.length) {
            setSlideIndex(1);
        }
    }

    useEffect(() => {
        dispatch(getImages(spot.id));
    }, [dispatch])


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
