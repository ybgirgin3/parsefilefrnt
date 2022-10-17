import React from 'react';

const DataPreview = ({ response }) => {
  // extract data
  const _data = response.data;
  // const information = response.data.information;
  // const raw_content = response.data.raw_content;
  // const _type = response.type;
  // const _size = response.size;

  return (
    <div>
      <label>information:</label>
      <hr />
      {/* <pre>{JSON.stringify(information, null, 10)}</pre> */}
      <code>{JSON.stringify(_data, null, 10)}</code>
    </div >
  );
};

export default DataPreview;
