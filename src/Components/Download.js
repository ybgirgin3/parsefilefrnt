import React from 'react';
import fileDownload from 'js-file-download';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function Download({ data }) {
  const handleDownload = () => {
    fileDownload(data, 'response.json');
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={handleDownload}
        icon={<DownloadOutlined />}>
        Download
      </Button>
    </div>
  );
}

export default Download;
