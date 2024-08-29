import React, { useEffect } from 'react';
import { Layout, Menu, ConfigProvider, Row, Col, Spin, Card } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { UnorderedListOutlined, RobotOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { GET_BOTS_REQUEST, GET_PACKAGES_REQUEST } from '../../../redux/actions/Actions';
import './index.css';
import LogoutButton from '../../Logout Button/LogoutButton';
import { BotsModel, SubscriptionModel } from '../../../models/BotsModel';
import { PackageModel } from '../../../models/PackageModel';
import RechargeBotButtonModal from '../../RechargeBot/RechargeBotButtonModal';

const { Header, Sider, Content } = Layout;

interface UserLayoutProps {
    bots: BotsModel[];
    loading: boolean;
    fetchBots: () => void;
    packages: PackageModel[];
    fetchPackages: () => void;
}

const UserLayout: React.FC<UserLayoutProps> = ({ bots, loading, fetchBots, packages, fetchPackages }) => {
    useEffect(() => {
        fetchBots();
        fetchPackages();
    }, [fetchBots, fetchPackages]);

    const renderSubscriptions = (subscriptions: SubscriptionModel[]) => {
        return subscriptions.map((sub) => (
            <p key={sub.id}>
                Messages Remaining: {sub.msgcount}<br />
                Expiry Date: {new Date(sub.expirydate).toLocaleDateString()}
            </p>
        ));
    };

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
                    <div className="logo">
                        {/* Placeholder for a logo if needed */}
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UnorderedListOutlined />}>
                            <Link to="/register">Packages</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<RobotOutlined />}>
                            <Link to="/user">Bots</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<LogoutButton collapsed={true} />}>
                            {/* Logout Button */}
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="header-content">
                        <h1 className='header-title'>User Panel</h1>
                    </Header>
                    <Content className="site-layout-background">
                        {loading ? (
                            <Spin size="large" />
                        ) : (
                            <Row gutter={[16, 16]}>
                                {bots.map((bot) => (
                                    <Col key={bot.id} span={8}>
                                        <Card title={bot.domain} bordered={true} className="bot-card">
                                            <p className='bot-card'>
                                                Status: {bot.status === 1 ? 'Active' : 'Inactive'}
                                            </p>
                                            {renderSubscriptions(bot.subscriptions)}
                                            <RechargeBotButtonModal botId={bot.id} packages={packages} />
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
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
    packages: state.pkgReducer.packages
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchBots: () => dispatch({ type: GET_BOTS_REQUEST }),
    fetchPackages: () => dispatch({ type: GET_PACKAGES_REQUEST }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);
