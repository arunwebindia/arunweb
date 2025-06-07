import * as Icons from 'react-icons/gi'
const Icon = ({ name, size = 24, color = "currentColor", ...props }) => {
    const ReactIcon = Icons[name];
    
    return <ReactIcon size={size} color={color} {...props} />;
  };
  
  export default Icon;