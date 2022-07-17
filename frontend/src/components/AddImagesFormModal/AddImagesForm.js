import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { addSpotImage, getOneSpot } from "../../store/spot"

const AddImagesForm = ({ showModal, setShowModal }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    let { spotId } = useParams();
    spotId = parseInt(spotId);

    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    console.log('errors:')
    console.log(errors.length)
    console.log(errors)
    console.log('images:')
    console.log(images.length)

    const updateFiles = (e) => {
        const files = e.target.files;
        setImages(files);
    };

    useEffect(() => {
        let res = [];

        if (images.length) {
            if (images.length < 5) {
                res.push('Please upload a minimum of five images for your spot.');
            } else if (images.length >= 5) {
                res.push();
            }
        } else {
            res.push('Please upload a minimum of five images for your spot.');
        }

        setErrors(res)
    }, [images])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (errors?.length === 0) {
            await dispatch(addSpotImage(images, spotId));
            await dispatch(getOneSpot(spotId));
            setShowModal(false);
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

                <label forhtml="images">Please upload a variety of images that best showcase your spot!</label>
                <input
                    type="file"
                    multiple
                    onChange={updateFiles} />

                <p>{errors}</p>
                <button>submit</button>
            </form >
        </>
    )
}
export default AddImagesForm;
