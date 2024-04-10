import React, { FC } from 'react';
import { ExploreTypes } from '../../../types.ts';
import "../Explore.scss";

interface ExploreProps {
    data: ExploreTypes
    openModal: (price: string) => void;
}

export const ExploreItemPS: FC<ExploreProps> = ({ data, openModal }) => {
    return (
        <div className="explore_ps-block-descr">
            {
                Object.keys(data).map(item => {
                    if (item !== "price") {
                        return (
                            <div className="explore_ps-block-descr-item">
                                <span>{item}:</span> {data[item]}
                            </div>
                        )
                    }
                })
            }
            <button 
                onClick={() => openModal(Object.values(data.price).join(''))}>
                    buy now
            </button>
        </div>
    )
}
