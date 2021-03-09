import React, { useState } from 'react';
import './NoFound.css';
import Exit from '../Exit/Exit';

const NoFound = () => {
    const [pic, setPic] = useState(false);
    return (
        <div className="error">
            <button onClick={() => setPic(!pic)}>Toggle Exit Button</button>
            <Exit pic={pic}></Exit>
        </div>
    );
};

export default NoFound;