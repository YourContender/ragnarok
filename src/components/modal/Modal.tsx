import React, { FC } from 'react';
import "./Modal.scss";

interface TestProps {
    showModal: boolean;
    priceModal: string;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<TestProps> = ({ showModal, setShowModal, priceModal }) => {
    console.log(1, showModal, setShowModal)
    return (
        <div className="modal">
            <div className="modal_container">
                <div className="modal_wrapper">
                    <div className="modal_title">
                        <button className="modal_title-btn" onClick={() => setShowModal(false)}>&times;</button>
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

                    <div className="modal_click">
                        <label>
                            <input type="checkbox" className='modal_click-checkbox'/>
                            <span className='modal_click-fake'></span>
                            <span className='modal_click-text'>I agree with the <span className='modal_click-rules'>rules</span> of the site</span>
                        </label>
                    </div>

                    <div className="modal_instruction">
                        <span>
                            Download of this product is subject to the PlayStation Network Terms 
                            of Service and our Software Usage Terms plus any specific additional 
                            conditions applying to this product. If you do not wish to accept 
                            these terms, do not download this product. See Terms of Service for 
                            more important information.
                        </span>
                    </div>

                    <div className="modal_sum">
                        <span>YOUR TOTAL SUMMA:</span>
                        <span className="modal_sum-num">{priceModal}</span>
                    </div>

                    <div className="modal_btn">
                        <button>buy now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;