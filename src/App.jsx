/* eslint-disable no-unused-vars */
import React from 'react';
import './App.scss';
import { Home } from './pages';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App;
