import React from 'react';
import axios from 'axios';

const FileUploadForm = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('selectedFile', selectedFile);
    try {
      const response = await axios({
        method: 'post',
        // url: '/api/upload/file',
        url: 'https://parsefileapi.herokuapp.com/uploadfile/',
        data: formData,
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
        },
      });

      console.log('response: ', response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileSelect} />
      <input type="submit" value="Upload File" />
    </form>
  );
};

export default FileUploadForm;
