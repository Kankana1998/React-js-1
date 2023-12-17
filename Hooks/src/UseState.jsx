import React, {useState} from 'react'

const UseState = () => {
    /*const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");*/
    //useState as an object

    const [details, setDetails] = useState({counter: 0, name: ""})

    function increaseCounter(){
       // setCounter(counter+1);
       setDetails((prev)=>({
        ...prev, counter: prev.counter+1,
        name: prev.name
       }))
    }
  return (
    <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>
        {name} has clicked {counter} times!!
      </h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  )
}

export default UseState
