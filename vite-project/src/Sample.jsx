import Theme from "./Theme";
import React from "react";
const Sample = () => {
  return (
    <Theme.Consumer>
      {
        (value) =>(
          <div>
          Our theme is:
          {value}
      </div>)
      }
        
        
    </Theme.Consumer>
  );
};

export default Sample;
