import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
      <div className="widget-header"> 
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button__link" onClick={props.handleRemove}>Remove All</button>
      </div>
      {!props.options.length && <p className="widget-header__msg">Please add your options to start :)</p>}
      {props.options.map((op, ind) => <Option key={op} option={op} ind={ind+1} handleRemoveOne={props.handleRemoveOne} />)}
    </div>
);


export default Options;