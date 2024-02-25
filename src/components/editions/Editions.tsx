import React, { FC } from 'react';
import "./Editions.scss";
import { editions } from "../../data";
import { EditionsItem } from './EditionsItem.tsx';

export const Editions: FC = () => {
  return (
    <div className="editions">
        <div className="editions_title">
            <h1>Editions</h1>
        </div>

        <div className="editions_container">
            {editions.map(item => {
                return <EditionsItem key={item.id} item={item}/>
            })}            
        </div>
    </div>
  )
}
