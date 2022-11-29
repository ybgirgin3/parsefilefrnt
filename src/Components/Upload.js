import React, { useState } from 'react';
import DataPreview from './DataPreview';
import Download from './Download';
import { Button } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.min.css';

const UploadAndParse = ({ url }) => {
  const [selectedFile, setSelectedFile] = useState(); // true if file is selected from ui
  const [postReqRes, setPostReqRes] = useState(''); // define data if post request response is valid
  const [uploading, setUploading] = useState(false); // true if post request response is valid

  const changeHandler = (event) => {
    // get file as attachment if selected
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    setUploading(true); // set isresp200 to true loading animated button 😅
    const form = new FormData(); // create new form data
    form.append('file', selectedFile);

    axios
      .post(url, form, {
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // },
      })
      .then((res) => {
        console.warn(res.data);
        setPostReqRes(res.data); // set response data to postreq for printing to screen
      })
      .catch((err) => console.warn(err))
      .finally(() => setUploading(false));
  };

  return (
    <div className="grid h-screen place-items-center ">
      <div class="bg-white-900 text-center py-4 lg:px-4">
        <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Welcome!!</span>
          <span class="font-semibold mr-2 text-left flex-auto">if you experience an issue please let me know in the <a href='https://github.com/ybgirgin3/parsefilefrnt/issues'>official github repo</a></span>
          <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
        </div>
      </div>
      <div className="mb-3 w-96">
        <label
          class="block mb-2 text-sm font-medium text-gray-900 "
          for="file_input">
          ParseFileAPI
        </label>
        <div class="flex flex-row">
          <input
            class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer  focus:outline-none mr-2"
            id="file_input"
            type="file"
            onChange={changeHandler}
          />

          {postReqRes ? (
            <Download data={postReqRes} />
          ) : (
            <Button
              type="primary"
              loading={uploading ? true : false}
              onClick={handleSubmission}>
              Parse
            </Button>
          )}
        </div>
      </div>
      {/* if response is good then print the output */}
      <div class="grid h-screen place-items-center">
        <DataPreview response={postReqRes} />
      </div>
    </div>
  );
};

export default UploadAndParse;
