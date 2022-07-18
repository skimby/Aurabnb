import { useState } from "react";

import ReviewForm from "./ReviewForm.js";
import { Modal } from '../../context/Modal.js';

const ReviewFormModal = ({ curReview, spotId, reviewId }) => {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            {!reviewId && (
                <button onClick={() => {
                    setShowModal(true)
                }}>Write a Review</button>
            )}

            {reviewId && (
                <button onClick={() => {
                    setShowModal(true)
                }}>Edit Review</button>

            )}


            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewForm curReview={curReview} showModal={showModal} setShowModal={setShowModal} spotId={spotId} reviewId={reviewId} />
                </Modal>
            )}
        </>
    );
}

export default ReviewFormModal;
