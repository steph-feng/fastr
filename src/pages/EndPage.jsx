import React from 'react';

function EndPage({
    setText,
    setEnd
}) {
    const handleButtonClick = () => {
        setText(true);
        setEnd(false);
    }
    return (
    <div>
        <p>All done</p>
        <button onClick={handleButtonClick}></button>
    </div>
    )

}

export default EndPage;