import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ConverterPage from './pages/converter.page';
import QuizPage from './pages/quiz.page';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route key="*" path="*" element={<Navigate to="/converter" replace />} />
          <Route key="/converter" path="/converter" element={<ConverterPage />} />
          <Route key="/quiz" path="/quiz" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
