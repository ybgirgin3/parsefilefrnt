import React from 'react';
import { Empty } from 'antd';

const DataPreview = ({ response }) => {
  // extract data
  const _data = response.data;

  return (
    <div>
      {_data ? (
        <code>
          <pre>{JSON.stringify(_data, null, 4)}</pre>
        </code>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default DataPreview;
