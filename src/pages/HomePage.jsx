import React from 'react';

function HomePage({
    words,
    setText
}) {
    const handleButtonClick = () => {
        setText(true);
    }

    return (
        <div>
            <p>hello</p>
            <button onClick={handleButtonClick}></button>
        </div>
    )
}

export default HomePage;