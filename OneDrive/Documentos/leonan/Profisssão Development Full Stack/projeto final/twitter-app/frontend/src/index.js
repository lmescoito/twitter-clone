// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Feed from './components/Feed';
import Login from './components/Login';
import Register from './components/Register';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Default to Login */}
        <Route path="/register" element={<Register />} />  {/* Register page */}
        <Route path="/feed" element={<Feed />} />  {/* Feed after login */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
