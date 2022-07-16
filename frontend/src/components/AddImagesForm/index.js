import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { addSpotImage } from "../../store/spot"

const AddImagesForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    let { spotId } = useParams();
    spotId = parseInt(spotId);

    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    // for multiple file upload
    const updateFiles = (e) => {
        const files = e.target.files;
        setImages(files);
    };
    useEffect(() => {
        if (images.length < 5) {
            errors.push('Please upload a minimum of five images for your spot.');
        }
    }, [errors])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!errors.length) {
            await dispatch(addSpotImage(images, spotId))
            history.push(`/spots/${spotId}`)
        }
        // .catch(async (res) => {
        //     const data = await res.json()
        //     console.log(data)
        //     console.log(data.errors)
        // });

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>{errors}</p>
                <label forhtml="images">Please upload images of your spot:</label>
                <input
                    type="file"
                    multiple
                    onChange={updateFiles} />

                <button>submit</button>
            </form >
        </>
    )
}
export default AddImagesForm;
