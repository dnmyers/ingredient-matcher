import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

import App from './App/App.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import About from './components/About/About.jsx';
import Search from './components/Search/Search.jsx';

import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
