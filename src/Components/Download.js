import React from 'react';
import fileDownload from 'js-file-download';
import { Button } from 'antd';

function Download({ data }) {
  const handleDownload = () => {
    fileDownload(data, 'response.json');
  };

  return (
    <div>
      <Button type="primary" onClick={handleDownload}>
        Download
      </Button>
    </div>
  );
}

export default Download;
