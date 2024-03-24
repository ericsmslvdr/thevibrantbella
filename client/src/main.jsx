import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { shopIcon } from '@shared/assets/images/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* Change tab icon */
const favicon = document.querySelector('link[rel="icon"]');
favicon.href = shopIcon