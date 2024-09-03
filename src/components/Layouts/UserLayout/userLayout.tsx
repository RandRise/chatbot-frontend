import React, { useEffect } from 'react';
import { Layout, Menu, ConfigProvider, Spin } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingCartOutlined, RobotOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { GET_BOTS_REQUEST, GET_PAID_PACKAGES_REQUEST } from '../../../redux/actions/Actions';
import './index.css';
import LogoutButton from '../../Logout Button/LogoutButton';
import CreateOrderButton from '../../CreateOrderButton/CreateOrderButton';
import UserBots from '../../../pages/userPages/UserBots/UserBots';// Updated import
import { BotsModel } from '../../../models/BotsModel';
import { PackageModel } from '../../../models/PackageModel';

const { Header, Sider, Content } = Layout;

interface UserLayoutProps {
  bots: BotsModel[];
  loading: boolean;
  fetchBots: () => void;
  packages: PackageModel[];
  fetchPackages: () => void;
}

const UserLayout: React.FC<UserLayoutProps> = ({ bots, loading, fetchBots, packages, fetchPackages }) => {
  const location = useLocation();

  useEffect(() => {
    fetchBots();
    fetchPackages();
  }, [fetchBots, fetchPackages]);

  const isBotsTab = location.pathname === '/user/bots';

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
            <Menu.Item key="1" icon={<RobotOutlined />}>
              <Link to="/user/bots">Bots</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
              <Link to="/user/orders">Orders</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<LogoutButton collapsed={true} />}></Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header-content">
            <h1 className="header-title">User Panel</h1>
          </Header>
          <Content className="site-layout-background">
            {isBotsTab && (
              <div className="create-order-button-container">
                <CreateOrderButton  />
              </div>
            )}
            {isBotsTab && (
              <>
                {loading ? (
                  <Spin size="large" />
                ) : (
                  <UserBots bots={bots} packages={packages} />  // Updated component name
                )}
              </>
            )}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

const mapStateToProps = (state: RootState) => ({
  bots: state.botsReducer.bots,
  loading: state.botsReducer.loading,
  packages: state.pkgReducer.packages,
  orders: state.orderInfoReducer.orders
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchBots: () => dispatch({ type: GET_BOTS_REQUEST }),
  fetchPackages: () => dispatch({ type: GET_PAID_PACKAGES_REQUEST }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);
