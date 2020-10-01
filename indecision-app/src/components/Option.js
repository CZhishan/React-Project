import React from 'react';

const Option = (props) => (
    <div className="option">
      <p className="option__text">{props.ind}. {props.option}</p>
      <button className="button button__link" onClick={(e) => {
        props.handleRemoveOne(props.option);
      }}>Remove</button>
    </div>
);


export default  Option;