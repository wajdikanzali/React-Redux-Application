import React from 'react';
import ReactLoading from 'react-loading';

const loading = ({config}) => (
  <ReactLoading
    type={config.type}
    color={config.color}
    height={config.height}
    width={config.width}
  />
);

export default loading;
