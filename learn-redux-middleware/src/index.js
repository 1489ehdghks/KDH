import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './modules';
import ReduxThunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(rootReducer,applyMiddleware(logger,ReduxThunk));


ReactDOM.root.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();




/*제거
import reportWebVitals from './reportWebVitals'; 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/