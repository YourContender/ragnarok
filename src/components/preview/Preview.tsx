import React, { FC } from 'react';
import "./Preview.scss";

interface PreviewProps {
    openModal: (price: string) => void;
}

export const Preview: FC<PreviewProps> = ({ openModal }) => {

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
                <button onClick={() => openModal('18.99$')}>buy now</button>
            </div>
        </div>
    </div>
  )
}
