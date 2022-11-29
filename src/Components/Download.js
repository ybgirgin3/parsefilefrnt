import React from 'react';
import fileDownload from 'js-file-download';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function Download({ data, isDisabled = false }) {
  const handleDownload = () => {
    fileDownload(data, 'response.json');
  };

  return (
    <div>
      <Button
        size={'large'}
        disabled={isDisabled}
        type="dashed"
        onClick={handleDownload}
        icon={<DownloadOutlined />}
        danger></Button>
    </div>
  );
}

export default Download;
