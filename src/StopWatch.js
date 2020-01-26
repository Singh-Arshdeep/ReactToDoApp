import React, { useState,useEffect } from 'react';

export default function StopWatch() {
    const [sec, setSec] = useState(0);

    let handleClick = ()=>{
        setSec(prevTime => prevTime + 1);
        setTimeout(handleClick, 1000);
    }

    return(
        <div>
            <input type="button" value="click me" onClick={handleClick}/>
            {sec}
        </div>
    );
}