import React from 'react';
import './App.css';




function Photo(props) {
  
  return (
      <>
      <div className="scene">
        <div className={props.isFlipped ? "is-flipped card" : "card"}>
  <div onClick={props.check} data-key={props.src} data-name={props.name} className="card__face card__face--front">{props.name}</div>
          <div className="card__face card__face--back" style={{backgroundImage: `url(${props.src})`}}></div>
        </div>
      </div>
        </>
  );
}

export default Photo;
