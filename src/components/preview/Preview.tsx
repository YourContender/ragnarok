import React, { FC } from 'react';
import "./Preview.scss";
import { t } from 'i18next';

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
                    {t("preview.descr")}
                </span>
                <button onClick={() => openModal('18.99$')}>{t("preview.button")}</button>
            </div>
        </div>
    </div>
  )
}
