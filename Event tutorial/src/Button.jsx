function Button(){
    const handleClick = () => console.log("OUCH!");
    return (<Button onClick={handleClick}>Click me</Button>);
}

export default Button