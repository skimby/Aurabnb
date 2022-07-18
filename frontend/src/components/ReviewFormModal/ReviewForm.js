import { useState } from "react";
import { useDispatch } from "react-redux";

import { createNewReview, updateReview } from "../../store/review";
import { getSpotReviews } from "../../store/review";
import { getOneSpot } from "../../store/spot";
import './ReviewForm.css'

const ReviewForm = ({ showModal, setShowModal, spotId, reviewId, curReview }) => {
    const dispatch = useDispatch();

    const [review, setReview] = useState((curReview && curReview.review) || '');
    const [starRating, setStarRating] = useState('');
    const [errors, setErrors] = useState(['']);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formInput = {
            review,
            stars: starRating
        }

        console.log(formInput);
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
                await dispatch(getSpotReviews(spotId));

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
                await dispatch(getSpotReviews(spotId));

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
            return (<button id='block-button' type='submit'>Submit Edit</button>)
        } else {
            return (<button id='block-button' type='submit'>Submit Review</button>)
        }
    }

    // console.log(starRating)
    return (
        <div className="form-modal">
            <div className="form-header">
                {header()}
            </div>

            <div className="stars-container ">
                <button id='star-shaped-button1'
                    onClick={(() => setStarRating(1))}><i className="fa-solid fa-star fa-2xl"></i>
                </button>
                <button id='star-shaped-button2'
                    onClick={(() => setStarRating(2))}><i className="fa-solid fa-star fa-2xl"></i>
                </button>
                <button id='star-shaped-button3'
                    onClick={(() => setStarRating(3))}><i className="fa-solid fa-star fa-2xl"></i>
                </button>
                <button id='star-shaped-button4'
                    onClick={(() => setStarRating(4))}><i className="fa-solid fa-star fa-2xl"></i>
                </button>
                <button id='star-shaped-button5'
                    onClick={(() => setStarRating(5))}><i className="fa-solid fa-star fa-2xl"></i>
                </button>
            </div>

            <form onSubmit={handleSubmit}>


                {/* <fieldset>
                    <legend>Rate your stay</legend> */}
                {/*
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
                </fieldset> */}

                <textarea
                    placeholder="Please give us a detailed review of your stay."
                    type='text'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                >
                </textarea>


                <div className="errors">
                    {errors?.map((error, idx) => <li key={idx}>{error}</li>)}
                </div>
                {submitButton()}


            </form >
        </div>
    )
}
export default ReviewForm;
