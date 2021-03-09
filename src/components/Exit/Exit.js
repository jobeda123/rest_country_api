import React from 'react';
import exit from '../NoFound/exit.jpg';
import noExit from '../NoFound/noExit.png';

const Exit = (props) => {    
    //console.log(props.pic);
    const akhi = props.pic? 
                <img src={exit} alt='/'></img>:
                <img src={noExit} alt='/'></img>
    return (
        <div>
            { akhi }
        </div>
    );
};

export default Exit;