import React, { FC } from 'react';
import "./About.scss";

export const About: FC = () => {
  return (
    <div className="about">
        <div className="about_title">
            <h1>About game</h1>
        </div>
        <div className="about_container">
            <div className="about_container-text">
                <h1>Watch the Trailer</h1>
                <button>play</button>
            </div>
        </div>
    </div>
  )
}
