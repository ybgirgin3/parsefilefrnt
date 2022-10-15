import React, { useState } from 'react';
import DataPreview from './DataPreview';
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
    <div className="grid h-screen place-items-center ">
      <div className="mb-3 w-96">
        <label
          for="formFile"
          className="form-label inline-block mb-2 text-gray-700">
          Default file input example
        </label>
        <input
          className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="file"
          name="file"
          id="formFile"
          onChange={changeHandler}
        />
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
          <p></p>
        )}
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={handleSubmission}>
            Submit
          </button>
        </div>
      </div>
      <br></br>
      <div className="mb-3 w-96">
        {isFilePosted ? (
          <div className="mb-3 w-96">
            <DataPreview response={postReqRes} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
