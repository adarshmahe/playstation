import React from "react";
import './ButtonGroup.css';

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className='custom-button-group'>
      <button onClick={() => previous()}><i className="bi bi-arrow-left-circle-fill" size={50}></i></button>
      <button onClick={() => next()}><i className="bi bi-arrow-right-circle-fill"></i></button>
    </div>
  );
};

export { CustomButtonGroup };
