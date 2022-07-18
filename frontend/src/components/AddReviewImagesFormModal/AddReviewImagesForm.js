import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { addImgToReview } from "../../store/review";
import { getOneSpot } from "../../store/spot";
import { getSpotReviews } from "../../store/review";

const AddReviewImagesForm = ({ spotId, showModal, setShowModal, reviewId }) => {
    const dispatch = useDispatch();

    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState(['']);

    const updateFiles = (e) => {
        const files = e.target.files;
        setImages(files);
    };

    useEffect(() => {
        let res = [];

        if (!images.length) {
            res.push('Please upload at least one image.');
        } else {
            res.push('')
        }

        setErrors(res)
    }, [images])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (errors[0] === '') {
            await dispatch(addImgToReview(images, reviewId))
                .catch(async (res) => {
                    const data = await res.json()
                    console.log(data)
                    console.log(data.errors)
                });
            // history.push(`/spots/${spotId}`)
            setShowModal(false)
            await dispatch(getSpotReviews(spotId))
            // }
            // .catch(async (res) => {
            //     const data = await res.json()
            //     console.log(data)
            //     console.log(data.errors)
            // });
        }
    }

    return (
        <>
            <div className="form-modal">
                <div className="form-header">
                    <h2>Upload Photos for your Review</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <label forhtml="images">Share photos for your stay at this spot!</label>
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
export default AddReviewImagesForm;
