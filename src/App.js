import './App.css';
import React from 'react';
import UploadAndParse from './Components/Upload';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <UploadAndParse />
    </div>
  );
}

export default App;
