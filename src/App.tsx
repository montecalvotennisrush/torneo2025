import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import Bracket from './components/Bracket';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Bracket />} />
    <Route path="/admin" element={<AdminPanel />} />
  </Routes>
);

export default App;