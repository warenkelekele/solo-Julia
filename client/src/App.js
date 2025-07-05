import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from  './Home'; // Assurez-vous que le chemin est correct



function App() {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

