import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { AddEmployee } from './pages/AddEmployee';
import { EditEmployee } from './pages/EditEmployee';
import { EmployeeDetail } from './pages/EmployeeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit" element={<EditEmployee />} />
        <Route path="/detail" element={<EmployeeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
