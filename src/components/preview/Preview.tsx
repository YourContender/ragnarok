import React, { FC } from 'react';
import "./Preview.scss";
import Modal from '../modal/Modal.tsx';

interface PreviewProps {
    openModal: () => void;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Preview: FC<PreviewProps> = ({ showModal, setShowModal, openModal }) => {

  return (
    <div className="preview">
        <div className="preview_block">    
        </div>
        <div className="preview_img">
        </div>

        <div className="preview_container">
            <div className="preview_block-title">
                <h1>
                    God of War Ragnarök
                </h1>
                <span>
                    Taking place three years following the events of the previous game, 
                    Fimbulwinter, a great winter that spans three summers, is drawing 
                    to a close which will begin the prophesied Ragnarök.
                </span>
                <button onClick={() => openModal()}>buy now</button>
            </div>
        </div>
        {/* {
            showModal ? <Modal/> : null
        } */}
    </div>
  )
}
