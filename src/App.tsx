import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import CategoriesPage from './pages/CategoriesPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;