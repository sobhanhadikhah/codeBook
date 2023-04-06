import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './featcures/store';
import { ScrollToTop } from './components';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store} >
        <ScrollToTop />
        <ToastContainer position='bottom-right' />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
)
