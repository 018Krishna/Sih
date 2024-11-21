// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aopt from './pages/Aopt'; // Example page component
import SharedRoute from './Components/SharedRoute'; // Example shared route component
import Live from './pages/Live';
import Monitor from './pages/Monitor';
import Dashboard1 from './pages/Dashboard1';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Use `element` instead of `component` */}
          <Route path="/" element={<Aopt/>} />
          <Route path="/live" element={<Monitor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
