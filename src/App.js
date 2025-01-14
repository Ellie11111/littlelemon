import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
import Menu from './Menu';

function App() {
  return (
   
    <Router>
      <div >
        <Nav />
        <Routes>
          <Route path="/*" element={<Main />} />
        </Routes>
        <Menu/>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
