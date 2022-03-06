import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import { Navbar, Homepage, People, Planets, Vehicles} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main"> 
        
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
               
              <Route exact path="/people" element={<People />} />
                
              <Route exact path="/planets" element={<Planets />} />
               
              <Route exact path="/vehicles" element={<Vehicles />} />               
            </Routes>
          </div>
        
      

        <div className="footer">
         
        </div>
      </div>
    </div>
  );
}

export default App;
