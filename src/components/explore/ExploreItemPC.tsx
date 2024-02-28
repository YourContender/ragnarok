import React, { FC } from 'react';
import { ExploreTypes } from '../../types.ts';
import "./Explore.scss";

interface ExploreProps {
    data: ExploreTypes
}

export const ExploreItemPC: FC<ExploreProps> = ({data}) => {
    console.log(data)
  return (
    <div className="explore_pc-block-descr">
        {
            Object.keys(data).map(item => {
                return (
                    <div className="explore_pc-block-descr-item">
                        <span>{item}:</span> {data[item]}
                    </div>
                )
            })
        }
        <button>buy now</button>
    </div>
  )
}
