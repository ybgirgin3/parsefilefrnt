import React from 'react';

const DataPreview = ({ response }) => {
  // extract data
  // const _data = response.data;
  const information = response.data.information;
  // const raw_content = response.data.raw_content;
  // const _type = response.type;
  // const _size = response.size;

  return (
    <div>
      <label>information:</label>
      <pre>{JSON.stringify(information, null, 10)}</pre>
    </div>
  );
};

export default DataPreview;
