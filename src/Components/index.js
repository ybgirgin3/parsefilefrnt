import React from 'react';
import UploadAndParse from './Upload';
import { Tabs } from 'antd';
import HowItWorks from './HowItWorks';
import 'antd/dist/antd.min.css';

// env 
const { REACT_APP_HEROKU_URL } = process.env

const Assembly = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <Tabs.TabPane tab="App" key="1">
        <UploadAndParse url={{ REACT_APP_HEROKU_URL }} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="How It Works?" key="2">
        <HowItWorks />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Assembly;
