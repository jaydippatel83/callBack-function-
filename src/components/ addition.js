import React from 'react';

const PlusButton = ({count, increaseCount}) => {
  return( 
      <button className="btn btn-block btn-primary" onClick={() => increaseCount(count + 1)}>+ Increament</button>
  )
};

export default PlusButton;
