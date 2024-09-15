import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { GET_BOTS_REQUEST, GET_PAID_PACKAGES_REQUEST } from '../../../redux/actions/Actions';
import { BotsModel } from '../../../models/BotsModel';
import { PackageModel } from '../../../models/PackageModel';
import { Outlet } from 'react-router-dom'; // Import Outlet to handle nested routes
import './../../../assets/styles/main.css';
import './../../../assets/styles/responsive.css';
import Sidenav from './sideNavAdmin';

const { Content, Sider } = Layout;

interface UserLayoutProps {
  bots: BotsModel[];
  loading: boolean;
  fetchBots: () => void;
  packages: PackageModel[];
  fetchPackages: () => void;
}

const UserLayout: React.FC<UserLayoutProps> = ({ bots, loading, fetchBots, packages, fetchPackages }) => {
  const [sidenavType] = React.useState("#fff");
  const [sidenavColor] = React.useState("#1890ff");

  useEffect(() => {
    fetchBots();
    fetchPackages();
  }, [fetchBots, fetchPackages]);

  return (
    <Layout className="layout-dashboard">
      <Sider
        breakpoint="lg"
        collapsible
        trigger={null}
        width={250}
        collapsedWidth={200}
        theme="light"
        className={`sider-primary ant-layout-sider-primary ${sidenavType === "#fff" ? "active-route" : ""}`}
        style={{ background: sidenavType }}
      >
        <Sidenav color={sidenavColor} />
      </Sider>
      <Layout>
        <Content className="content-ant">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
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
