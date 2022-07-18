import { useState } from "react";
import LoginForm from "./LoginForm";
import { Modal } from '../../context/Modal.js';

const LoginFormModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id='nav-button' onClick={() => setShowModal(true)}>Log In</button>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
