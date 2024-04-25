import React, { FC } from 'react';
import "./Modal.scss";
import { t } from 'i18next';

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
                        <p className="modal_title-p">{t("modal.title")}</p>
                    </div>

                    <div className="modal_card">
                        <label>{t("modal.card")}: </label>
                        <input type="text" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="modal_expire">
                        <div>
                            <label>{t("modal.expire")}: </label>
                            <input type="text" placeholder="MM/YY" />
                        </div>

                        <div>
                            <label>{t("modal.cvv")}: </label>
                            <input type="text" placeholder="***"/>
                        </div>
                    </div>
                    <div className="modal_instant">
                        <label>{t("modal.instant")}: </label>
                        <input type="text" placeholder="John Smith" />
                    </div>

                    <div className="modal_click">
                        <label>
                            <input type="checkbox" className='modal_click-checkbox'/>
                            <span className='modal_click-fake'></span>
                            <span className='modal_click-text'>
                                {t("modal.text.part1")} 
                                <span className='modal_click-rules'>
                                    {t("modal.text.part2")}
                                </span> 
                                {t("modal.text.part3")}
                            </span>
                        </label>
                    </div>

                    <div className="modal_instruction">
                        <span>
                            {t("modal.descr")}
                        </span>
                    </div>

                    <div className="modal_sum">
                        <span>{t("modal.sum")}: </span>
                        <span className="modal_sum-num">{priceModal}</span>
                    </div>

                    <div className="modal_btn">
                        <button>{t("modal.btn")}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;