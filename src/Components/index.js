import React from 'react';
import UploadAndParse from './Upload';
import { Tabs } from 'antd';
import HowItWorks from './HowItWorks';
import 'antd/dist/antd.min.css';

const Assembly = () => {
  // * variables
  // let local_url = 'http://localhost:8080';
  let heroku_url = 'https://parsefileapi.herokuapp.com/uploadfile/';

  return (
    <Tabs defaultActiveKey="1" centered>
      <Tabs.TabPane tab="App" key="1">
        <UploadAndParse url={heroku_url} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="How It Works?" key="2">
        <HowItWorks />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Assembly;
