import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

function Footerx() {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}>
      <a href="https://github.com/ybgirgin3">Yusuf Berkay Girgin</a> ©2022
      Created With React, Tailwindcss and Ant Design, Powered by Heroku
    </Footer>
  );
}

export default Footerx;
