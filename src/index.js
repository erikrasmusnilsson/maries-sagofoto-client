import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { reducer } from './store/reducer';

axios.defaults.baseURL = 'http://68.183.211.72:3001';
//axios.defaults.baseURL = 'http://localhost:3001';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={ store }>
    <Router>
        <App />
    </Router>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
