import React, { useState } from 'react';
import DataPreview from './DataPreview';
import { Button, Tabs } from 'antd';
import HowItWorks from './HowItWorks';
import Download from './Download';
import axios from 'axios';
import 'antd/dist/antd.min.css';

const UploadAndParse = () => {
  const [selectedFile, setSelectedFile] = useState(); // true if file is selected from ui
  const [postReqRes, setPostReqRes] = useState(''); // define data if post request response is valid
  const [uploading, setUploading] = useState(false); // true if post request response is valid

  // url of main file uploading
  let main_url = 'https://parsefileapi.herokuapp.com/uploadfile/';

  const changeHandler = (event) => {
    // get file as attachment if selected
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = () => {
    setUploading(true); // set isresp200 to true loading animated button 😅
    const form = new FormData(); // create new form data
    form.append('file', selectedFile);

    axios
      .post(main_url, form, {
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
    <Tabs defaultActiveKey="1" centered>
      <Tabs.TabPane tab="App" key="1">
        <div className="grid h-screen place-items-center ">
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
                <Download />
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
          <DataPreview response={postReqRes} />
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="How It Works?" key="2">
        <HowItWorks />
      </Tabs.TabPane>
    </Tabs >
  );
};

export default UploadAndParse;
