import React, { useEffect } from 'react';
import { Layout, Menu, ConfigProvider, Spin } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { GET_ALL_ORDERS_REQUEST, GET_BOTS_REQUEST } from '../../../redux/actions/Actions';
import LogoutButton from '../../Logout Button/LogoutButton';
import { BotsModel } from '../../../models/BotsModel';
import './index.css'

const { Header, Sider, Content } = Layout;

interface AdminLayoutProps {
  loading: boolean;
  fetchOrders: () => void;
  fetchBots: () => void; // Add fetchBots to props
  bots: BotsModel[];
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ fetchOrders, fetchBots, loading, bots }) => {
  useEffect(() => {
    fetchOrders();
    fetchBots(); // Fetch bots data on component mount
  }, [fetchOrders, fetchBots]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3881C3',
        },
      }}
    >
      <Layout>
        <Sider width={230} collapsible className="ant-layout-sider">
          <div className="logo"></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
              <Link to="/admin/orders">Orders</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<LogoutButton collapsed={true} />}></Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header-content">
            <h1 className="header-title">Admin Panel</h1>
          </Header>
          <Content className="site-layout-background">
            <Spin spinning={loading}>
              <Outlet />
            </Spin>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

const mapStateToProps = (state: RootState) => ({
  loading: state.orderInfoReducer.loading || state.botsReducer.loading,
  bots: state.botsReducer.bots
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchOrders: () => dispatch({ type: GET_ALL_ORDERS_REQUEST }),
  fetchBots: () => dispatch({ type: GET_BOTS_REQUEST })
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLayout);
