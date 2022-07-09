
const Gallery = ({ spot, index, slideIndex, setSlideIndex }) => {


    return (
        <>
            {
                spot.previewImage.map((image, i) => {
                    return (
                        <div
                            className={slideIndex === i + 1 ? `slide active ${index}` : `slide ${index}`} key={i + `div ${i}`} >

                            <img src={image} key={i} width='300px' className='image-styling' />

                        </div>
                    )
                })
            }
        </>
    )
};

export default Gallery;
