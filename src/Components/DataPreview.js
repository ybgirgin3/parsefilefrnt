import React from 'react';
import { Empty } from 'antd';
import Preview from 'react-data-preview';

const DataPreview = ({ response }) => {
  // extract data
  const _data = response.data;

  return (
    <div>{_data ? <Preview theme={'light'} data={_data} /> : <Empty />}</div>
    /*
    <div>
      {_data ? (
        <code>
          <pre>{JSON.stringify(_data, null, 4)}</pre>
        </code>
      ) : (
        <Empty />
      )}
    </div>
    */
  );
};

export default DataPreview;
