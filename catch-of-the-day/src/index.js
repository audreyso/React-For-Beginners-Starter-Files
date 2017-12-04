// let's go!
import React from 'react';
// You are importing just one method from react-dom
// hence, the {} around render
import { render } from 'react-dom';
// If you wanted the whole library -->
// import ReactDOM from 'react-dom';

// 'StockPicker' cannot be a string b/c then it thinks it's in the node_modules directory
// Do a relative path instead without js on the end
import StorePicker from './components/StorePicker';

render(<StorePicker/>, document.querySelector('#main'));