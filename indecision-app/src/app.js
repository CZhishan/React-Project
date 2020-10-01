// JavaScript XML - JSX
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
// virtual DOM, calculate minimun changes, compare two objects, rerender
// setState Asynchronous: prevState/this.state(won't be changed immediately)
// props v.s. state: both objects, props come from above(self-props cannot be changed), 
//                   state defined in component itself(can be changed and shared)
