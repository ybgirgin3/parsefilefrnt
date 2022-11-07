import './App.css';
import React from 'react';
import UploadAndParse from './Components/Upload';
import NavBar from './Components/NavBar';
// import FileUpload from './Components/FileUpload.func';

function App() {
  return (
    <div className="App">
      <NavBar />
      <UploadAndParse />
    </div>
  );
}

export default App;
