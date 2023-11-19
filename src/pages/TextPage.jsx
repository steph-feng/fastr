import React, { useState, useEffect } from 'react';

function TextPage({
    words,
    setText,
    setEnd
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayWord, setDisplayWord] = useState(words[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < words.length - 1) {
                setCurrentIndex(prevIndex => prevIndex + 1);
                setDisplayWord(words[currentIndex + 1]);
            } else {
                clearInterval(intervalId);
            }
        }, 500);

        return () => clearInterval(intervalId);
    }, [currentIndex, words]);

    const handleButtonClick = () => {
        setText(false);
        setEnd(true);
    }

    return(
        <div>
            <p>{displayWord}</p>
            <button onClick={handleButtonClick}></button>
        </div>
    )

}

export default TextPage;