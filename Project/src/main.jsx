// // index.js


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root') // Ensure this ID matches your HTML file
// );


//----------------Now there is the routing issue here
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store/store';// Ensure this path is correct
// import App from './App';
// import './index.css'; //

// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import store from './store/store';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter> {/* Wrap the app in BrowserRouter */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
