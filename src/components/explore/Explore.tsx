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
                <div className="explore_pc-block-container">
                    <div className="explore_pc-block-img"></div>
                    <img src={require('../../img/explore1.png')} alt="" />
                </div>

                <div className="explore_pc-block-descr">
                    <div className="explore_pc-block-descr-item"><span>CPU:</span> Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)</div>
                    <div className="explore_pc-block-descr-item"><span>RAM:</span> 8 GB</div>
                    <div className="explore_pc-block-descr-item"><span>OS:</span> Windows 10 64-bit</div>
                    <div className="explore_pc-block-descr-item"><span>VIDEOCARD:</span> NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)</div>
                    <div className="explore_pc-block-descr-item"><span>PIXEL SHADER:</span> 5.1</div>
                    <div className="explore_pc-block-descr-item"><span>VERTEX SHADER:</span> 5.1</div>
                    <div className="explore_pc-block-descr-item"><span>FREE DISK SPACE:</span> 70 GB</div>
                    <div className="explore_pc-block-descr-item"><span>DEDICATED VIDEO RAM:</span> 4 GB</div>
                    <button>buy now</button>
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
