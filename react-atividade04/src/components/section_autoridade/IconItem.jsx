import React from 'react';
import './Autoridade.css'

const IconItem = ({ imgSrc, text }) => {
    return (
        <div className="icon-item">
            <img src={imgSrc} className="icon-image" />
            <p className="icon-text">{text}</p>
        </div>
    );
};

export default IconItem;
