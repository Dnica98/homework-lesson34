import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import ToDoPage from './pages/ToDoPage';
import Shop from './pages/Shop';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>  
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/todo' element={<ToDoPage/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);