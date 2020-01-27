import React, { useState,useEffect } from 'react';

export default function StopWatch() {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);

    let handleClick = ()=>{
        setSec(prevTime => prevTime + 1);
        setTimeout(handleClick, 1000);
    }

    useEffect(()=>{
        console.log(sec);
        if(sec==11) {
            setSec(0);
            setMin(prev=>prev+1);
        }

    });

    return(
        <div>
            <input type="button" value="click me" onClick={handleClick}/>
        {min}:{sec}
        </div>
    );
}