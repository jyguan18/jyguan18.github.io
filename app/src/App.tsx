import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
// import AnimationPage from './pages/AnimationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AnimationPage />} /> */}
      </Routes>
    </BrowserRouter>
);
}

export default App;
