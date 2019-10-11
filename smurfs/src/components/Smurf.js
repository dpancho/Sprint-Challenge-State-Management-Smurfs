import React from 'react';

const Smurf = props => {
  console.log(`Smurf props`, props)
  return (
    <div>
      <p>Name: {props.smf.name}</p>
      <p>Age: {props.smf.age}</p>
      <p>Height: {props.smf.height}</p>
    </div>
  )
};

export default Smurf;
