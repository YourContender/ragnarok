import React, { FC } from 'react';
import "./Modal.scss";

interface TestProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<TestProps> = ({ showModal, setShowModal }) => {
    console.log(1, showModal, setShowModal)
    return (
        <div className="modal">
            <div className="modal_container">
                <div className="modal_wrapper">
                    <div className="modal_title">
                        <button onClick={() => setShowModal(false)}>&times;</button>
                        <span className="modal_title-h1">GOD OF WAR RAGNAROK</span>
                        <p className="modal_title-p">STANDARD EDITION</p>
                    </div>

                    <div className="modal_card">
                        <label>Credit card: </label>
                        <input type="text" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="modal_expire">
                        <div>
                            <label>Expire: </label>
                            <input type="text" placeholder="MM/YY" />
                        </div>

                        <div>
                            <label>CCV: </label>
                            <input type="text" placeholder="***"/>
                        </div>
                    </div>
                    <div className="modal_instant">
                        <label>Instant: </label>
                        <input type="text" placeholder="John Smith" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;