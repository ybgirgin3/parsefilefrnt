import './App.css';
import React from 'react';
import FileUpload from './Components/FileUpload';

function App() {
  const fileUploadForm = <FileUpload />;
  return (
    <div className="App">
      <div>{fileUploadForm}</div>
    </div>
  );
}

export default App;
