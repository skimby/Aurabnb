import { useState } from "react";

import AddReviewImagesForm from './AddReviewImagesForm';
import { Modal } from '../../context/Modal.js';


const AddReviewImagesFormModal = ({ spotId, reviewId }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => {
                setShowModal(true)
            }}>Add Images</button>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddReviewImagesForm spotId={spotId} reviewId={reviewId} showModal={showModal} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default AddReviewImagesFormModal;
