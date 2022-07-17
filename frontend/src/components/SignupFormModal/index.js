import SignupForm from "./SignupFormModal";
import { useState } from "react";
import { Modal } from '../../context/Modal.js';

const SignupFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id='nav-button' onClick={() => setShowModal(true)}>
                Sign Up
            </button>
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <SignupForm />
                    </Modal>
                )
            }
        </>
    )
}
export default SignupFormModal;
