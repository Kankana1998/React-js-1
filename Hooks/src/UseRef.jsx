import React, {useState, useRef, useEffect} from "react";


const UseRef = () => {

    const [name, setName] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    })
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h2>Name: {name}</h2>
      <h2>Renders: {count.current}</h2>
    </div>
  )
}

export default UseRef
