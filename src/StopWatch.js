import React, { useState,useEffect } from 'react';

let lapMin = [];
let lapSec = [];
export default function StopWatch() {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [lap, setLap] = useState(0);

    let handleClick = ()=>{
        setSec(prevTime => prevTime + 1);
        setTimeout(handleClick, 1000);
    }
    var divList = null;
    let handleLap = ()=> {
        setLap(prev => prev + 1);
        lapSec.push(sec);
        lapMin.push(min);
        divList.push(<div>Hi</div>);
    }
    
    useEffect(()=>{
        if(sec==11) {
            setSec(0);
            setMin(prev=>prev+1);
        }

    }, []);

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
            {divList}
            ->{lapSec}
        </div>
    );
}