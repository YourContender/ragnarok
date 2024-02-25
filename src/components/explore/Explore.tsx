import React, { FC } from 'react';
import "./Explore.scss";

export const Explore: FC = () => {
  return (
    <div className="explore">
        <div className="explore_title">
            <h1>Explore the God of War series</h1>
        </div>

        <div className="explore_pc">
            <div className="explore_pc-title">
                <h4>Here are the God of War (PC) System Requirements</h4>
            </div>
            <div className="explore_pc-switch">
                <span>min</span>
                <button>switch</button> 
                <span>rec</span>
            </div>
            <div className="explore_pc-block">
                <div className="explore_pc-block-img">
                    <img src="" alt="" />
                </div>

                <div className="explore_pc-block-descr">
                    <span>CPU: Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)</span>
                    <span>RAM: 8 GB</span>
                    <span>OS: Windows 10 64-bit</span>
                    <span>VIDEOCARD: NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)</span>
                    <span>PIXEL SHADER: 5.1</span>
                    <span>VERTEX SHADER: 5.1</span>
                    <span>FREE DISK SPACE: 70 GB</span>
                    <span>DEDICATED VIDEO RAM: 4 GB</span>
                </div>
            </div>
        </div>

        <div className="explore_ps">
            <div className="explore_ps-title"></div>
            <div className="explore_ps-switch"></div>
            <div className="explore_ps-block"></div>
        </div>
    </div>
  )
}
