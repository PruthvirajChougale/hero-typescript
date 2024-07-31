
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './navbar';
import './App.css';
import Home from './home';
import Heroes from './heroes';
import Edit from './edit'
function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Heroes' element={<Heroes />}/>
          <Route path='/edit/:id' element={<Edit />}/>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
