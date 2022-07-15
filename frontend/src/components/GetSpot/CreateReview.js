import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createNewReview } from "../../store/review";

const CreateReview = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let { spotId } = useParams();
    spotId = parseInt(spotId);

    const [review, setReview] = useState('');
    const [starRating, setStarRating] = useState();


    const handleChange = (e) => {
        setStarRating(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formInput = {
            review,
            stars: parseInt(starRating)
        }

        await dispatch(createNewReview(formInput, spotId));
        history.push(`/spots/${spotId}`)
    }


    return (
        <form onSubmit={handleSubmit}>
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
            <button>Submit Review!</button>


        </form >
    )
}
export default CreateReview;
