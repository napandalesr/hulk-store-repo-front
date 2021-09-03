import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import _Sider from './routes/Sider';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
      <_Sider/>
  </React.StrictMode>,
  document.getElementById('root')
);
