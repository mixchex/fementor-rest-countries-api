import React from 'react';
import { HashRouter, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import CountryIndex from './views/CountryIndex';
import CountryShow from './views/CountryShow';
import NotFound from './views/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename="/fementor-rest-countries-api">
      <Routes>
        <Route index path="/fementor-rest-countries-api" element={<CountryIndex />} />
        <Route path="/fementor-rest-countries-api/countries" element={<Navigate replace to="/fementor-rest-countries-api/" />} />
        <Route path="/fementor-rest-countries-api/countries/:country" element={<CountryShow />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
