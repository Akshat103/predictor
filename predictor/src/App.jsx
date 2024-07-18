import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import './App.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const PredictorPage = lazy(() => import('./pages/PredictorPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dte-mp-colleges-predictor" element={<PredictorPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
};

export default App;