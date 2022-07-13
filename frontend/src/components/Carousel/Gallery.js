import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Gallery = ({ spot, index, slideIndex, setSlideIndex }) => {
    const history = useHistory();
    // const spot = useSelector(state => state.spot);

    const handleClick = () => {
        history.push(`/spots/${spot.id}`)
    }
    return (
        <>
            {
                spot?.previewImage.map((image, i) => {
                    return (
                        <div
                            className={slideIndex === i + 1 ? `slide active ${index}` : `slide ${index}`} key={i + `div ${i}`} onClick={handleClick}>

                            <img src={image} key={i} width='300px' className='image-styling' />

                        </div>
                    )
                })
            }
        </>
    )
};

export default Gallery;
