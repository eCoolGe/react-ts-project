import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Converter from './pages/Converter';
import Quiz from './pages/Quiz';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route key="*" path="*" element={<Navigate to="/converter" replace />}/>
        <Route key="/converter" path="/converter" element={<Converter/>}/>
        <Route key="/quiz" path="/quiz" element={<Quiz/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
