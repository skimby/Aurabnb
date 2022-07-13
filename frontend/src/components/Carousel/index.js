import { useSelector, useDispatch } from "react-redux";
import './SpotGallery.css';
import GalleryCard from "./GalleryCard";
import { useEffect } from "react";
import { loadAllSpots } from "../../store/spot";


const Carousel = () => {
    const spots = Object.values(useSelector(state => state.spot));
    const dispatch = useDispatch();

    delete spots[spots.length - 1];


    //remove this later!!
    // delete spots[0];
    // delete spots[1];
    // delete spots[2];

    useEffect(() => {
        //why is this dispatching again? isnt' it only supposed to dispatch once?
        dispatch(loadAllSpots());
        console.log('dispatching again')
    }, [dispatch])


    console.log(spots)
    console.log('^')

    return (
        <>
            <div className='spot-carousel'>
                {spots?.map((spot, index) => {
                    return (
                        <GalleryCard spot={spot} index={index} key={index} />
                    )
                })}
            </div>
        </>
    )
}

export default Carousel;



    // const allSlides = document.getElementsByClassName('slide');

    // const nextSlide = () => {
    //     console.log('next slide')
    //     if (slideIndex !== allSlides.length) {
    //         setSlideIndex(slideIndex + 1);
    //     } else if (slideIndex === allSlides.length) {
    //         setSlideIndex(1);
    //     }
    // }
    // const prevSlide = () => {
    //     console.log('prev slide')
    //     if (slideIndex !== allSlides.length) {
    //         setSlideIndex(slideIndex + 1);
    //     } else if (slideIndex === allSlides.length) {
    //         setSlideIndex(1);
    //     }

    // }


// {spots?.map((spot, index) => {
//     return (
//         <>
//             <div className={`eachSpot ${index}`} key={index}>
//                 <EachGallery index={index} spot={spot} key={`${index} gallery`} />

//                 {/* {spot.previewImage.map((image, i) => {
//                     return (
//                         <div
//                             className={slideIndex === i + 1 ? `slide active ${index}` : `slide ${index}`} key={i + `div ${i}`} >
//                             <img src={image} key={i} width='300px' className='image-styling' />
//                         </div>
//                     )
//                 })} */}


//                 <ButtonSlider className={index} direction={'prev'} spotIndex={index} key={`${index} prev button`} spot={spot} />

//                 <ButtonSlider className={index} direction={'next'} spotIndex={index} key={`${index} next button`} spot={spot} />
//             </div>
//         </>
//     )
// })}

// {/* <div className="dots">
//     {Array.from({ length: 5 }).map((item, i) => {
//         < div className={slideIndex === index + 1 ? 'dot active' : 'dot'}></div>
//     }}
// </div> */}
