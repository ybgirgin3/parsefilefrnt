import './App.css';
import React from 'react';
import FileUpload from './Components/FileUpload';
import NavBar from './Components/NavBar';
// import FileUpload from './Components/FileUpload.func';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FileUpload />
    </div>
  );
}

export default App;
