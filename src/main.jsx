import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './featcures/store';
import { ScrollToTop } from './components';
import { FilterProvider } from './context';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store} >
        <ScrollToTop />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
)
