
import React from "react";

const Flex = ({ children, className}) => {
  return <div className={`flex ${className} orthi`}>{children}</div>;
};

export default Flex;
