


const ButtonSlider = ({ direction, moveSlide, slideIndex, setSlideIndex, spotIndex }) => {
    // console.log(spotIndex)

    // const allSlides = document.getElementsByClassName('slide');
    // console.log(allSlides)
    // console.log(parseInt(spotIndex))

    const nextSlide = () => {
        let allSlides = document.getElementsByClassName(`slide ${spotIndex}`)
        console.log(allSlides);

        // if (spotIndex)
        //     console.log('next slide')
        if (slideIndex !== allSlides.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === allSlides.length) {
            setSlideIndex(1);
        }
    }
    const prevSlide = () => {
        let index = parseInt(spotIndex)
        let allSlides = document.getElementsByClassName(`slide ${index}`)
        // let test = document.getElementsByClassName('slide')
        console.log(allSlides);
        // console.log(typeof spotIndex)


        console.log('prev slide')
        if (slideIndex !== allSlides.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === allSlides.length) {
            setSlideIndex(1);
        }

    }


    return (
        <>
            <button
                className={direction === 'next' ? `btn-slide next ${spotIndex}` : `btn-slide prev ${spotIndex}`}


                onClick={direction === 'next' ? nextSlide : prevSlide}>

                <i className={direction === 'next' ? "fa-solid fa-circle-chevron-left" : "fa-solid fa-circle-chevron-right"}></i>
            </button>

            {/* <button className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'} onClick={moveSlide}><i className={direction === 'next' ? "fa-solid fa-circle-chevron-left" : "fa-solid fa-circle-chevron-right"}></i>
            </button> */}

            {/* <button className='next' onClick={moveSlide} ><i className="fa-solid fa-circle-chevron-right"></i></button> */}
        </>
    )
}
export default ButtonSlider;
