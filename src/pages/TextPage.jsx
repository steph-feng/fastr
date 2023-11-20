import React, { useState, useEffect } from 'react';
import "./TextPage.css";

function TextPage({
    words
}) {
    const [end, setEnd] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayWord, setDisplayWord] = useState(words[0]);
    const [intervalDuration, setIntervalDuration] = useState(500);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex < words.length - 1) {
                setCurrentIndex(prevIndex => prevIndex + 1);
                setDisplayWord(words[currentIndex + 1]);
                setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + intervalDuration);
            } else {
                setEnd(true);
                clearInterval(intervalId);
            }
        }, intervalDuration);

        return () => {
            clearInterval(intervalId);
        }
    }, [currentIndex, words, intervalDuration]);

    const handleIntervalChange = (event) => {
        const newIntervalDuration = 2000 - parseInt(event.target.value, 10);
        setIntervalDuration(newIntervalDuration);
    }

    const handleButtonClick = () => {
        setCurrentIndex(0);
        setDisplayWord(words[0]);
        setIntervalDuration(500);
        setTimeElapsed(0);
        setEnd(false);
    }

    if (end) {
        let totalTime = timeElapsed;
        totalTime = totalTime / 1000;
        return (
            <div className='app'>
                <p>You read {words.length} words in {totalTime} seconds!</p>
                <p>To reread this paragraph, click below!</p>
                <button className='start-button' onClick={handleButtonClick}>Reread</button>
                <p>To read new text, highlight new text on the webpage!</p>
            </div> 
        )
    }
    return (
        <div className='app'>
            <p>{displayWord}</p>
            <p>Adjust speed below!</p>
            <input
                type='range'
                min="1000"
                max="2000"
                value={2000 - intervalDuration}
                onChange={handleIntervalChange}
            />
        </div>
    )
}

export default TextPage;
