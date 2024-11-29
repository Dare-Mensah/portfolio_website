import React from 'react'
import Navbar from './screen/Navbar'
import Main from './screen/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App