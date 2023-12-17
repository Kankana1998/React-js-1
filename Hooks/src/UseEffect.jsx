import React, {useState, useEffect} from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [otherCount, setOtherCount] = useState(5);
    const [time, setTime] = useState(0)
    // useEffect without dependencies

    /*
    useEffect(() => {
        document.title = `${count} new messages!`;
    });
    */

    // useEffect with an empty array

    
    /*useEffect(() => {
        document.title = `${count} new messages!`;
    }, []);*/
    

    // useEffect with variables

    useEffect(() => {
        document.title = `${otherCount} new messages!`;
    }, [otherCount]);

    // Clean-up Function in useEffect
    useEffect(()=>{
       const timer =  setInterval(() => {
            setTime(time+1);
        }, 1000);
      
        return () => {
            clearInterval(timer);
        }
    }, [time]);
  return (
    <div>
        <h4>{time} in seconds!</h4>
      <h3>{count} new Messages!</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h3>Other Count: {otherCount}</h3>
      <button onClick={() => setOtherCount(otherCount + 5)}>Increase by 5</button>
    </div>
  )
}

export default UseEffect
