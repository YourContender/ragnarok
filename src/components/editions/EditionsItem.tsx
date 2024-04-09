import React, { FC } from 'react';
import { Editions } from '../../types';

interface EditionsItemProps {
    item: Editions
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditionsItem: FC<EditionsItemProps> = ({ item, showModal, setShowModal }) => {
  return (
    <div className="editions_card">
        <div className="editions_card-img">
            <img src={item.img} alt="card 1" />
        </div>
        <div className="editions_card-title">
            <h2>{item.title}</h2>
            <span>{item.subtitle}</span>
        </div>
        <div className="editions_card-descr">
            {item.descr.map(item => {
                return <span key={item}>{item}</span>
            })}
        </div>
        <div className="editions_card-price">
            <span>{item.price}</span>
            <button onClick={() => setShowModal(true)}>buy now</button>
        </div>
    </div>
  )
}
