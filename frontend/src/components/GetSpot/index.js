import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { deleteOneSpot, getOneSpot } from "../../store/spot";
import { getSpotReviews } from "../../store/review";
import { getUsersBookings } from "../../store/booking";
import SpotFormModal from "../SpotFormModal";
import AddImagesFormModal from "../AddImagesFormModal";
import ReviewFormModal from "../ReviewFormModal";
import Reviews from "./Reviews";
import SpotGallery from "./SpotGallery";
import './GetSpot.css'
import './Reviews.css'

const MONTHS_ARR = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const GetSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let { spotId } = useParams();
    spotId = parseInt(spotId);

    const [userOwned, setUserOwned] = useState();
    const [bookedUser, setBookedUser] = useState(false);
    const [hasNoImages, setHasNoImages] = useState();
    const [editForm] = useState(true);
    const [dateMonth, setDateMonth] = useState(null);
    const [dateYear, setDateYear] = useState(null);

    const user = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spot.currentSpot);
    const reviews = Object.values(useSelector(state => state.review));
    const userBookings = Object.values(useSelector(state => state.booking));


    useEffect(() => {
        if (spot) {
            setDateMonth(new Date(spot?.createdAt).getMonth());
            setDateYear(new Date(spot?.createdAt).getFullYear());
        }
    }, [spot]);

    useEffect(() => {
        dispatch(getOneSpot(spotId))
        dispatch(getSpotReviews(spotId))
    }, [dispatch, spotId]);

    useEffect(() => {
        dispatch(getUsersBookings(user?.id));
    }, [dispatch, user]);

    useEffect(() => {
        if (spot) {
            if (user?.id === spot?.ownerId) {
                setUserOwned(true)
            } else {
                setUserOwned(false);
            }
        }
    }, [user, spot]);

    useEffect(() => {
        if (spot && userBookings) {
            const hasBooked = userBookings?.find(booking => spotId === booking.spotId);
            const hasReviewed = reviews?.find(review => user?.id === review.userId);

            if (hasBooked && !hasReviewed) {
                setBookedUser(true);
            } else {
                setBookedUser(false);
            }
        }
    }, [spot, spotId, userBookings, reviews, user])

    useEffect(() => {
        if (spot?.images?.length === 0) {
            setHasNoImages(true);
        } else {
            setHasNoImages(false);
        }
    }, [spot])

    const handleDelete = async () => {
        await dispatch(deleteOneSpot(spotId));
        history.push(`/`)
    }

    return (
        <>
            {spot && (
                <div className="spot-container">
                    <>
                        <div className="spot-header-container">
                            <div className="spot-header">
                                <h1>{spot?.name}</h1>
                                <div className="review-header">
                                    <div className='star-box'>
                                        <i className="fa-solid fa-star fa-sm spots-star"></i>
                                    </div>
                                    <h4>{spot?.avgStarRatings?.toFixed(1)} · {spot?.numReviews} reviews  · {spot?.city}, {spot?.state}</h4>
                                </div>
                            </div>
                            {
                                userOwned && (
                                    <>
                                        <div className="user-owned-functions">
                                            <SpotFormModal editForm={editForm} />
                                            <AddImagesFormModal />
                                            <button onClick={handleDelete}>Delete Spot</button>
                                        </div>
                                    </>
                                )
                            }
                        </div>


                        {hasNoImages && (
                            <div className='default-img'>
                                <img src='https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/placeholder-image.png' width='100%' height='450px' alt='placeholder' className='default' />
                            </div>
                        )}
                        {!hasNoImages && (
                            <SpotGallery spot={spot} />
                        )}



                        <div className="spot-information">
                            <h2>Entire home hosted by {spot?.Owner?.firstName}</h2>
                            <h4>Hosting this space since {MONTHS_ARR[dateMonth]} {dateYear}</h4>
                            <p>{spot?.description}</p>
                        </div>



                        <div className="reviews-container" >
                            <div className="reviews-header">
                                <div className="reviews-star">
                                    <i className="fa-solid fa-star fa-sm"></i></div>
                                <div className="review-top">
                                    <h2>{spot?.avgStarRatings?.toFixed(1)} · {spot?.numReviews} Reviews</h2>
                                </div>

                            </div>

                            {bookedUser && (
                                <>
                                    <div className='write-review'>
                                        <div className="text">
                                            <h4>Looks like you've stayed here recently. Write a review of your visit!</h4>
                                        </div>
                                        <ReviewFormModal spotId={spotId} />
                                    </div>
                                    <hr></hr>
                                </>
                            )}

                            <div className="reviews-grid">
                                {reviews && reviews?.map((review, index) => {
                                    return (
                                        <div className='each-review' key={index}>
                                            <Reviews review={review} spot={spot} spotId={spot?.id} />
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </>



                </div >
            )
            }
        </>
    )
}

export default GetSpot;
