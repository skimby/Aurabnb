import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { addSpotImage, getOneSpot } from "../../store/spot"
import '../SignupFormModal/SignupForm.css'

const AddImagesForm = ({ showModal, setShowModal }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    let { spotId } = useParams();
    spotId = parseInt(spotId);

    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);


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
            <div className="form-modal">
                <div className="form-header">
                    <h2>Upload Photos of your Place</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <label forhtml="images">Please upload a variety of images that best showcase your spot!</label>
                    <input
                        id='no-outline-input'
                        type="file"
                        multiple
                        onChange={updateFiles} />

                    <div className="errors">
                        {errors?.map((error, idx) => <li key={idx}>{error}</li>)}
                    </div>
                    <button id='block-button'>submit</button>
                </form >
            </div>
        </>
    )
}
export default AddImagesForm;
