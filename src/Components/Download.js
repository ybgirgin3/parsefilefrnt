import React from 'react';
import FileDownload from 'react-file-download';
import { Button } from 'antd';

function Download({ data }) {
  const handleDownload = () => {
    FileDownload(data, 'response.json');
  };

  return (
    <div>
      <Button type="primary" onClick={handleDownload}>
        Download Data
      </Button>
    </div>
  );
}

export default Download;
