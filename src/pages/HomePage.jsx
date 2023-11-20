import React from 'react';
import './HomePage.css';

function HomePage({
    words,
    setText
}) {
    const handleButtonClick = () => {
        setText(true);
    }

    return (
        <div className='app'>
            <h1>Welcome to Fastr</h1>
            <h2>Click the button to read faster!</h2>
            <div className="info-box">{words}</div>
            <button className='start-button' onClick={handleButtonClick}>Start Reading</button>
        </div>
    )
}

export default HomePage;
