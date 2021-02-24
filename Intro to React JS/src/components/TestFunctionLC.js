import React, { useState, useEffect } from 'react';

const TestFunctionLC = () => {

    const [text, setText] = useState('World')

    const changeText = () => {
        setText('Geek !')
    }

    return (
        <div>
            <h1>GeeksForGeeks.org, Hello{text}</h1>
            <h2>
                <a onClick={changeText}>Press Here!</a>
            </h2>
        </div>
    );
}

// React memo will handle the shouldComponentUpdate() in legacy codes
export default TestFunctionLC