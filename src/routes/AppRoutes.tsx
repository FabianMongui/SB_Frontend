import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Entities from '../pages/Entities';

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/entities" element={<Entities />} />
    </Routes>
  </Router>
);

export default AppRoutes;
