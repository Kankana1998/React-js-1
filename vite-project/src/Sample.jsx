import Theme from "./Theme";
import { Consumer } from "react";
const Sample = () => {
  return (
    <Theme.Consumer>
      <div>
        Our theme is:
        {Theme}
      </div>
    </Theme.Consumer>
  );
};

export default Sample;
