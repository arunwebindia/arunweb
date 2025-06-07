import { useState } from "react";
import * as Icons from "react-icons/fa";
import * as Icon from "react-icons/fa6";
const FaIcon = ({ name, size = 24, ...props }) => {
  const [color, setColor] = useState("#03A9F4");
  const ReactIcon = Icons[name] ?? Icon[name];

  return (
    <span
      className="social pointer"
      onMouseEnter={() => setColor("#fff")}
      onMouseLeave={() => setColor("#03A9F4")}
    >
      <ReactIcon size={size} color={color} {...props} />
    </span>
  );
};

export default FaIcon;
