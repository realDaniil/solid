import React from 'react';
import './App.css';
import 'aos/dist/aos.css'
import Header from './components/UI/header/Header';
import Footer from './components/UI/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Anchor from './components/UI/anchor/Anchor';
import CallUsBtn from './components/UI/callUsBtn/CallUsBtn';
function App() {
  return (
    <BrowserRouter>
        <Header />
        <AppRouter />
        <Anchor />
        <Footer />
        <CallUsBtn />
    </BrowserRouter>
  );
}

export default App;
