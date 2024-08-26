// src/components/Layouts/UserLayout/userLayout.tsx
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import {
  HomeOutlined,
  MessageOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import './index.css';

const { Header, Sider, Content } = Layout;

const UserLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo">User Dashboard</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/user/dashboard">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<MessageOutlined />}>
            <Link to="/user/messages">Messages</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ProfileOutlined />}>
            <Link to="/user/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="header-content">
            <h1>User Panel</h1>
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
