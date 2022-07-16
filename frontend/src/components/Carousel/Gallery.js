import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Gallery = ({ spot, index, slideIndex, setSlideIndex }) => {
    const history = useHistory();
    const [needsDefaultImg, setNeedsDefaultImg] = useState();

    const handleClick = () => {
        if (spot) {
            history.push(`/spots/${spot.id}`)
        }
    }

    useEffect(() => {
        if (spot?.previewImage.length === 0) {
            setNeedsDefaultImg(true);
        }
    }, [spot])

    return (
        <>
            {spot && (
                <>
                    {!needsDefaultImg && (
                        spot?.previewImage.map((image, i) => {
                            return (
                                <div
                                    className={slideIndex === i + 1 ? `slide active ${index}` : `slide ${index}`} key={i + `div ${i}`} onClick={handleClick}>

                                    <img src={image} key={i} width='300px' className='image-styling' alt={image} />

                                </div>
                            )
                        })
                    )}

                    {needsDefaultImg && (
                        <div
                            onClick={handleClick}>

                            <img src='https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/placeholder-image.png' width='300px' className='image-styling' alt='placeholder ' />

                        </div>
                    )}
                </>
            )}
        </>
    )
};

export default Gallery;
