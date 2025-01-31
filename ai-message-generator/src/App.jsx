// filepath: /ai-message-generator/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
// import Register from './components/Register';
// import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} /> */}
      </Routes>
    </Router>
  );
}

export default App;