import React, {useState, useEffect, useRef} from 'react';

const CountRef = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef()
    useEffect(() => {
        intervalRef.current = setInterval(() =>{
            setCount(prevCount => prevCount +1);
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => clearInterval(intervalRef.current)}>ストップ</button>
        </div>
    );
}

export default CountRef;