import React from 'react';

const PregenButton = ({ image, text }) => {

    return (
        <button className = 'pregen-button'>
            <img src={image} alt={text} />
            <h3>{text}</h3>
        </button>
    )
}

export default PregenButton;