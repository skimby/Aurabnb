import { useState } from "react";
import { useDispatch } from "react-redux";

import { createNewReview, updateReview } from "../../store/review";
import { getSpotReviews } from "../../store/review";
import { getOneSpot } from "../../store/spot";

const ReviewForm = ({ showModal, setShowModal, spotId, reviewId }) => {
    const dispatch = useDispatch();

    const [review, setReview] = useState('');
    const [starRating, setStarRating] = useState();
    const [errors, setErrors] = useState(['']);

    const handleChange = (e) => {
        setStarRating(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        const formInput = {
            review,
            stars: parseInt(starRating)
        }

        // if (!errors.length) {
        if (reviewId) {
            setErrors([])
            const updatedReview = await dispatch(updateReview(formInput, reviewId))
                .catch(async (res) => {
                    const data = await res.json()
                    setErrors(data.errors)
                });

            if (updatedReview) {
                setShowModal(false)
                await dispatch(getOneSpot(spotId))
            }
        } else {
            const newReview = await dispatch(createNewReview(formInput, spotId))
                .catch(async (res) => {
                    const data = await res.json()
                    setErrors(data.errors)
                });

            if (newReview) {
                setShowModal(false)
                await dispatch(getOneSpot(spotId))
            }
        }
    }

    //Set form header (create vs edit)
    const header = () => {
        if (reviewId) {
            return (<h2>Edit your Review</h2>)
        } else {
            return (<h2>Write your Review</h2>)
        }
    }
    const submitButton = () => {
        if (reviewId) {
            return (<button type='submit'>Submit Edit</button>)
        } else {
            return (<button type='submit'>Submit Review</button>)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            {header()}
            <input
                placeholder="Please give us a detailed review of your stay."
                type='text'
                value={review}
                onChange={(e) => setReview(e.target.value)}
            >
            </input>

            <fieldset>
                <legend>Rate your stay</legend>

                <div>
                    <input type="radio"
                        id="1"
                        name="1"
                        value="1"
                        checked={starRating === '1'}
                        onChange={handleChange}
                        className='star-rating-input' />
                    <label htmlFor="1">1 {<i className="fa-solid fa-star fa-2xl"></i>}</label>
                </div>

                <div>
                    <input type="radio"
                        id="2"
                        name="2"
                        value="2"
                        checked={starRating === '2'}
                        onChange={handleChange}
                        className='star-rating-input' />
                    <label htmlFor="2">2 {<i className="fa-solid fa-star fa-2xl"></i>}</label>
                </div>

                <div>
                    <input type="radio"
                        id="3"
                        name="3"
                        value="3"
                        checked={starRating === '3'}
                        onChange={handleChange}
                        className='star-rating-input' />
                    <label htmlFor="3">3 {<i className="fa-solid fa-star fa-2xl"></i>}</label>
                </div>
                <div>
                    <input type="radio"
                        id="4"
                        name="4"
                        value="4"
                        checked={starRating === '4'}
                        onChange={handleChange}
                        className='star-rating-input' />
                    <label htmlFor="4">4 {<i className="fa-solid fa-star fa-2xl"></i>}</label>
                </div>
                <div>
                    <input type="radio"
                        id="5"
                        name="5"
                        value="5"
                        checked={starRating === '5'}
                        onChange={handleChange}
                        className='star-rating-input' />
                    <label htmlFor="5">5 {<i className="fa-solid fa-star fa-2xl"></i>}</label>
                </div>
            </fieldset>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            {submitButton()}


        </form >
    )
}
export default ReviewForm;
