import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './assets/styles/main.css'
import './assets/styles/responsive.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);