import React, { FC } from 'react';
import "./Editions.scss";
import { editions } from "../../data";
import { EditionsItem } from './EditionsItem.tsx';

interface EditionsProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Editions: FC<EditionsProps> = ({ showModal, setShowModal }) => {
  return (
    <div className="editions">
        <div className="editions_title">
            <h1>Editions</h1>
        </div>

        <div className="editions_container">
            {editions.map(item => {
                return <EditionsItem key={item.id} item={item} showModal={showModal} setShowModal={setShowModal}/>
            })}            
        </div>
    </div>
  )
}
