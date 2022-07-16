import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { addImgToReview } from "../../store/review";


const AddReviewImagesForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    let { reviewId } = useParams();
    let { spotId } = useParams();
    reviewId = parseInt(reviewId);
    spotId = parseInt(spotId);

    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState();

    const updateFiles = (e) => {
        const files = e.target.files;
        setImages(files);
    };

    console.log('got to review img form')

    useEffect(() => {
        let res = [];
        if (images.length) {
            if (images.length < 5) {
                res.push('Please upload a minimum of five images for your spot.');
            }
        }
        setErrors(res)
    }, [images])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (errors?.length === 0) {
        await dispatch(addImgToReview(images, reviewId))
            .catch(async (res) => {
                const data = await res.json()
                console.log(data)
                console.log(data.errors)
            });
        history.push(`/spots/${spotId}`)
        // }
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
                <label forhtml="images">Please upload images of your review:</label>
                <input
                    type="file"
                    multiple
                    onChange={updateFiles} />
                <button>submit</button>
            </form >
        </>
    )
}
export default AddReviewImagesForm;
