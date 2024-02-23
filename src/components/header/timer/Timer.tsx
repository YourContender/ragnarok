import React from 'react';
import Countdown from 'react-countdown-now';
import "./Timer.scss";

export const Timer = () => {
    const date = Date.now() + 21 * 24 * 60 * 60 * 1000;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {  
        if (completed) {
          return <span>Время истекло!</span>;
        } else {
          return (
            <div className="timer">
                <span className='timer-title'>release</span>
                <span className="timer-item">
                    {days}
                    <p>DAYS</p>
                </span> 
                <span className="timer-item">
                    {hours.length < 10 ? `0${hours}`: hours}
                    <p>HOURS</p>
                </span> 
                <span className="timer-item">
                    {minutes === 0 ? "00" : minutes}
                    <p>MINUTES</p>
                </span> 
            </div>
          );
        }
      };

    return (
        <div>
            <Countdown date={date} renderer={renderer}/>
        </div>
    )
}
