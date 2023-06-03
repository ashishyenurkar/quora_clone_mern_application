import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { Provider } from 'react-redux';
import store from './app/store.js';

TimeAgo.addDefaultLocale(en);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> <App /></Provider>
   
  </React.StrictMode>,
)
