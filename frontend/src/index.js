import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'

// css
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Router

const MainBrowser=()=>{
  return (
    <Routes>
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MainBrowser/>
  </BrowserRouter>
);