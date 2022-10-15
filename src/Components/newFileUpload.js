import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [postReqRes, setPostReqRes] = useState('');
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isFilePosted, setIsFilePosted] = useState(false);

  // url of main file uploading
  let main_url = 'https://parsefileapi.herokuapp.com/uploadfile/';

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const form = new FormData();

    form.append('file', selectedFile);
    console.warn('selected file name is: ', selectedFile);

    axios
      .post(main_url, form)
      .then((res) => {
        console.warn(res.data);
        setPostReqRes(res.data);
        setIsFilePosted(true);
      })
      .catch((err) => console.warn(err));
  };

  return (
    <div>
      <div>ParseFileAPI</div>
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
      {isFilePosted ? (
        <div>
          <p>
            Message:
            {postReqRes.message}
          </p>
          <p>File Type: {postReqRes.type}</p>
          <p>{JSON.stringify(postReqRes)}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FileUpload;
