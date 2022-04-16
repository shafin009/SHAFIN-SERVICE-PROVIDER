import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Share File/Footer/Footer';
import Header from './components/Share File/Header/Header';
import NotFound from './components/Share File/NotFound/NotFound';




function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
