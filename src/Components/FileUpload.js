import React, { useState } from 'react';
import DataPreview from './DataPreview';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [postReqRes, setPostReqRes] = useState('');
  const [isresp200, setIsresp200] = useState(true);
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isFilePosted, setIsFilePosted] = useState(false);

  // url of main file uploading
  let main_url = 'https://parsefileapi.herokuapp.com/uploadfile/';

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    setIsresp200(false);
    const form = new FormData();

    form.append('file', selectedFile);

    axios
      .post(main_url, form, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        console.warn(res.data);
        setIsresp200(true);
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
          ParserFileAPI
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
          {isresp200 ? (
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded"
              onClick={handleSubmission}>
              Parse
            </button>
          ) : (
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out bg-blue-500 rounded-md shadow cursor-not-allowed hover:bg-indigo-400"
              disabled="">
              <svg
                class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </button>
          )}
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
