import React, { FC } from 'react'
import "./DualSense.scss";

interface DualSenseProps {
    openModal: (price: string) => void;
}

export const DualSense: FC<DualSenseProps> = ({ openModal }) => {
  return (
    <div className="sense">
        <div className="sense_title">
            <h1>DualSense</h1>
        </div>
        <div className="sense_container">
            <div className="sense_container-left">
                <div className="sense_container-top">
                    You can also buy an exclusive controller  
                    with the <span>God of War Ragnarok </span> 
                    theme for PS5
                </div>
                <div className="sense_container-bottom">
                    If you purchase a controller and a game 
                    (any edition), you will receive a <span>15% </span> 
                    discount on two items.
                </div>
                <div className="sense_price">
                    <span>35.99$</span>
                    <button onClick={() => openModal("35.99$")}>
                        buy dualsense with a game
                    </button>
                </div>
            </div>
            <div className="sense_container-img">
                <img src={require('../../img/console.png')} alt="" />
            </div>
        </div>
    </div>
  )
}
