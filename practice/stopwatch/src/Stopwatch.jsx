import React, { useState, useEffect, useRef } from 'react';

function Stopwatch() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setTime(Date.now() - startTimeRef.current);
            },10)
        }
        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [isRunning])

    function handleStart(){
        startTimeRef.current = Date.now() - time
        setIsRunning(true);
    }

    function handleStop(){
        setIsRunning(false);
        startTimeRef.current = 0;
    }

    function handleReset(){
        setIsRunning(false);
        setTime(0);
    }

    function formatTime(){
        let hours = Math.floor(time / (1000 * 3600));
        let mins = Math.floor(time / (1000 * 60) % 60);
        let secs = Math.floor(time / (1000) % 60);
        let millisecs = Math.floor(time / (10) % 100);

        hours = String(hours).padStart(2, "0");
        mins = String(mins).padStart(2, "0");
        secs = String(secs).padStart(2, "0");
        millisecs = String(millisecs).padStart(2, "0");
        let hourspan = document.createElement('span');
        hourspan.textContent = hours;
        let minspan = document.createElement('span');
        minspan.textContent = mins;
        let secspan = document.createElement('span');
        secspan.textContent = secs;
        let millisecspan = document.createElement('span');
        millisecspan.textContent = millisecs;
        return `${hourspan.textContent} : ${minspan.textContent} : ${secspan.textContent} : ${millisecspan.textContent}`;
    }

    return (
        <>
        <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="font-bold text-4xl">{formatTime()}</h1>
            <div className="flex gap-2">
                <button onClick={handleStart} className="bg-blue-100 rounded p-2">START</button>
                <button onClick={handleStop} className="bg-red-100 rounded p-2">STOP</button>
                <button onClick={handleReset} className="bg-yellow-100 rounded p-2">RESET</button>
            </div>
        </div>
        </>
    );
}

export default Stopwatch;
