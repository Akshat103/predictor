import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Spinner from './components/Spinner';
import './App.css';

const PredictorPage = lazy(() => import('./pages/PredictorPage'));

const App = () => {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/predict" element={<PredictorPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;