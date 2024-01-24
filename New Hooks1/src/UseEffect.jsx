import {useState, useRef, useEffect} from 'react'

const UseEffect = () => {
  const [title, setTitle] = useState("default title");
  const titleRef = useRef();
  useEffect(() => {
    console.log("use Effect");
    document.title = title;
  });

  const handleClick = () => setTitle(titleRef.current.value);
  console.log("render");
  
  return (
    <div>
      <input ref={titleRef} />
      <button onClick={handleClick}>Change title</button>
    </div>
  )
}

export default UseEffect
