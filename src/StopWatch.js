import React, { useState,useEffect } from 'react';

export default function StopWatch() {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [lap, setLap] = useState(0);

    let handleClick = ()=>{
        setSec(prevTime => prevTime + 1);
        setTimeout(handleClick, 1000);
    }

    let lapArr = [];
    let handleLap = ()=> {
        setLap(prev => prev + 1);
        lapArr.push({
            "sec":{sec},
            "min":{min}
        });
        console.log(lapArr);
    }

    useEffect(()=>{
        if(sec==11) {
            setSec(0);
            setMin(prev=>prev+1);
        }

    });

    return(
        <div>
            <input type="button" value="click me" onClick={handleClick}/>
            <hr/>
            {min}:{sec}
            <hr/>
            <input type="button" value="Lap" onClick={handleLap}/>
            <hr/>
            {lap}
            <hr/>
            {lapArr.sec}
        </div>
    );
}