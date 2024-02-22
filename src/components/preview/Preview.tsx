import React, { FC } from 'react';
import "./Preview.scss";

export const Preview: FC = () => {
  return (
    <div className="preview">
        <div className="preview_block">
            <div className="preview_block-title">
                <h1>
                    God of War Ragnarök
                </h1>
                <span>
                    Taking place three years following the events of the previous game, 
                    Fimbulwinter, a great winter that spans three summers, is drawing 
                    to a close which will begin the prophesied Ragnarök.
                </span>
                <button>buy now</button>
            </div>
        </div>
        <div className="preview_img">
        </div>
    </div>
  )
}
