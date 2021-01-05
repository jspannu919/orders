import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import AppStore from './redux/appStore';


ReactDOM.render(
  <Provider store={AppStore}>
    <App store={AppStore}/>
  </Provider>,
  document.getElementById('root')
);

