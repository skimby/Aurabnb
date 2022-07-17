import { useState } from "react";

import AddImagesForm from "./AddImagesForm.js";
import { Modal } from '../../context/Modal.js';


const AddImagesFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => {
                setShowModal(true)
            }}>Add Images</button>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddImagesForm showModal={showModal} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default AddImagesFormModal;
