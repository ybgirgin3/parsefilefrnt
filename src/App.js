import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Auth';
import NavBar from './Components/NavBar';
import Assembly from './Components';

function App() {
  const contentAssembly = () => {
    return (
      <>
        <NavBar />
        <Assembly />
      </>
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={contentAssembly} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
