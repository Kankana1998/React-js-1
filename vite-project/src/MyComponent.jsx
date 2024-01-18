import React from "react";
class MyComponent extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        console.log(this.props);
    } 
}
export default MyComponent