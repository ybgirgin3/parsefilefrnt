import React from 'react';
import { Empty } from 'antd';

const DataPreview = ({ response }) => {
  // extract data
  const _data = response.data;
  // const information = response.data.information;
  // const raw_content = response.data.raw_content;
  // const _type = response.type;
  // const _size = response.size;

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
