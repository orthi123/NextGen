import React from 'react';
import { Children } from 'react';

const Container = ({Children}) => {
  return <div className="Container">{Children}</div>;
};

export default Container;
