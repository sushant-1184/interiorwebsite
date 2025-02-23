import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Residentialpage from './pages/Residentialpage';

import Commercialpage from './pages/Commercialpage';
import Footer from './components/Footercode';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
    <Navbar/>
    
    <Routes>
    
      <Route path='/service' element={<Services/>}></Route>
      <Route path='/commercial' element={<Commercialpage/>}></Route>
      <Route path='/residencial' element={<Residentialpage/>}></Route>
      
    </Routes>

    <Footer />
    

  </BrowserRouter>
    </div>
  );
}

export default App;
