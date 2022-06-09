import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import {Provider} from 'redux';
import './index.css';
import App from './App';
import rootReducer from './modules';

const store = createStore(rootReducer)


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);




/*제거
import reportWebVitals from './reportWebVitals'; 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/