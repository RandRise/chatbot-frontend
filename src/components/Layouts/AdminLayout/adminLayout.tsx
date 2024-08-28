// src/components/Layouts/AdminLayout/adminLayout.tsx
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import LogoutButton from '../../Logout Button/LogoutButton';
import './index.css';

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo">Admin Dashboard</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/admin/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            <Link to="">Settings</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutButton collapsed={false} />}>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="header-content">
            <h1>Admin Panel</h1>
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
