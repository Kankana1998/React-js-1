import Card from './Card.jsx'
import Student from './Student.jsx'
function App() {

  return (
    <>
     
  {/*<h1 className="myclass">React is {5+6} times better with JSX</h1>;
    
  
  
  React supports if statements, but not inside JSX.
  const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}
  const x = 5;
<h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;*/}

  <Card />
  <Card />
  <Card />
  <Card />
  
<Student name="Kankana" />
<Student name="Alice" />
<Student name="Bella" />



  </>
  );
}

export default App
