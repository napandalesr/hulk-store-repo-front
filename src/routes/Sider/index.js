import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import Routes from '..';

import './style.scss';
import { _ROUTES } from '../../utils/constants';

const { Header, Sider, Content } = Layout;

const _Sider = () => {
  const [login]=React.useState(localStorage.getItem('access_token'));
  const [state, setState]=React.useState({collapsed: false});

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  return <Router>
    {
      login ?
      <Layout>
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to={_ROUTES.home}>Inicio</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Productos
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />}>
              Entradas
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              Salidas
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <h2>Hulk Store</h2>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
            }}
          >
            <Routes/>
          </Content>
        </Layout>
      </Layout>
      :
      <Routes/>
    }
    
  </Router>;
};

export default _Sider;