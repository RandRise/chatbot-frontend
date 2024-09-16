import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input, Typography, Menu, Layout, Row, Col, Switch, Checkbox } from 'antd';
import { RootState } from '../../../redux/reducers';
import { USER_REGISTRATION_REQUEST, GET_PACKAGES_REQUEST } from '../../../redux/actions/Actions';
import { userRegistrationModel } from '../../../models/UserRegistrationModel';
import { GenericResponse } from '../../../utils/GenericResponse';
import { PackageModel } from '../../../models/PackageModel';
import '../../../assets/styles/main.css';
import '../../../assets/styles/responsive.css';
import signinbg from '../../../assets/images/vecteezy_a-robot-reading-a-book-on-a-stack-of-books_34410802.png';
import Origator from "../../../assets/images/Origator.png";
import SpinLoaderSign from '../../../components/common/spinLoader/SpinLoaderSign';
import {
    DribbbleOutlined,
    TwitterOutlined,
    InstagramOutlined,
    GithubOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

// SVG Constants
const SignupIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z" fill="#111827" className="fill-muted"></path>
    </svg>
);

const SigninIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <path className="fill-muted" d="M12.25,14H1.75A1.752,1.752,0,0,1,0,12.25V3.5A1.752,1.752,0,0,1,1.75,1.75h.876V.875a.875.875,0,0,1,1.75,0V1.75h5.25V.875a.875.875,0,0,1,1.75,0V1.75h.875A1.752,1.752,0,0,1,14,3.5v8.75A1.752,1.752,0,0,1,12.25,14ZM3.5,4.375a.875.875,0,0,0,0,1.75h7a.875.875,0,0,0,0-1.75Z"/>
    </svg>
);

interface UserRegistrationProps {
    response: GenericResponse | null;
    isSuccess: boolean | null;
    loading: boolean;
    packages: PackageModel[];
    registerUser: (user: userRegistrationModel) => void;
    fetchPackages: () => void;
}

const UserRegistrationForm: React.FC<UserRegistrationProps> = ({ response, isSuccess, loading, registerUser, fetchPackages }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    useEffect(() => {
        fetchPackages();
    }, [fetchPackages]);

    const onFinish = (values: userRegistrationModel) => {
        registerUser(values);
        form.resetFields();
    };

    useEffect(() => {
        if (isSuccess === true) {
            setTimeout(() => {
                navigate('/sign-in');
            }, 500);
        }
    }, [isSuccess, response?.message, navigate]);

    return (
        <Layout className="layout-default layout-signin">
            <Header>
                <div className="brand">
                    <img src={Origator} alt="Brand Logo" />
                    <span></span>
                </div>
                <div className="header-col header-nav">
                    <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
                        <Menu.Item key="1">
                            <Link to="/sign-up">
                                {SignupIcon}
                                <span> Sign Up</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/sign-in">
                                {SigninIcon}
                                <span> Sign In</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </Header>
            <Content className="signin">
                <Row gutter={[24, 0]} justify="space-around">
                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 6, offset: 2 }} md={{ span: 12 }}>
                        <Title className="mb-15">Sign Up</Title>
                        <Title className="font-regular text-muted" level={5}>
                            Please fill up the following form to sign up
                        </Title>
                        <Form form={form} name="basic" initialValues={{ remember: false }} onFinish={onFinish} className="row-col" layout='vertical'>
                            <Form.Item className="username" name="firstname" rules={[{ required: true, message: "Please input your first name" }]}>
                                <Input placeholder="First Name" />
                            </Form.Item>
                            <Form.Item className="username" name="lastname" rules={[{ required: true, message: "Please input your last name" }]}>
                                <Input placeholder="Last Name" />
                            </Form.Item>
                            <Form.Item className="username" name="email" rules={[{ required: true, type: 'email', message: "Please input your email" }]}>
                                <Input placeholder="Email" />
                            </Form.Item>
                            <Form.Item className="username" name="domain" rules={[{ required: true, type: 'url', message: 'Please enter your valid website URL' }]}>
                                <Input placeholder='Enter your website URL' />
                            </Form.Item>
                            <Form.Item className='username' name="password" rules={[{ required: true, message: "Please input your password!" }, { pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: 'Password must be at least 8 characters long and contain at least one number, one uppercase letter, and one lowercase letter' }]}>
                                <Input.Password placeholder="Password" style={{ padding: '0px 11px' }} />
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="checked">
                                <Form.Item className="align-center" name="remember" valuePropName="checked">
                                    <Switch defaultChecked />
                                    Remember me
                                </Form.Item>
                                <Checkbox>
                                    I agree to the{" "}
                                    <a href="#pablo" className="font-bold text-dark">Terms and Conditions</a>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <Button style={{ width: "100%" }} type="primary" htmlType="submit">
                                    {loading ? <SpinLoaderSign size={24}/> : 'Sign up'}
                                </Button>
                            </Form.Item>
                        </Form>
                        <p className="font-semibold text-muted text-center">
                            Already have an account?{" "}
                            <Link to="/sign-in" className="font-bold text-dark">Sign In</Link>
                        </p>
                    </Col>
                    <Col className="sign-img" style={{ padding: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} md={{ span: 12 }}>
                        <img src={signinbg} alt="Sign In Background" />
                    </Col>
                </Row>
            </Content>
            <Footer>
                <Menu mode="horizontal">
                    <Menu.Item>Company</Menu.Item>
                    <Menu.Item>About Us</Menu.Item>
                    <Menu.Item>Teams</Menu.Item>
                    <Menu.Item>Blogs</Menu.Item>
                    <Menu.Item>
                        <Link to="/pricing">Pricing</Link>
                    </Menu.Item>
                </Menu>
                <Menu mode="horizontal" className="menu-nav-social">
                    <Menu.Item>
                        <Link to="#">{<DribbbleOutlined />}</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="#">{<TwitterOutlined />}</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="#">{<InstagramOutlined />}</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="#">
                            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                            </svg>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="#">{<GithubOutlined />}</Link>
                    </Menu.Item>
                </Menu>
                <p className="copyright">
                    Copyright © 2024 Origator by<a href="#rand">Creative Team</a>.
                </p>
            </Footer>
        </Layout>
    );
};

const mapStateToProps = (state: RootState) => ({
    response: state.userRegistration.response,
    isSuccess: state.userRegistration.isSuccess,
    loading: state.userRegistration.loading,
    packages: state.pkgReducer.packages,
});

const mapDispatchToProps = (dispatch: any) => ({
    registerUser: (user: userRegistrationModel) => dispatch({ type: USER_REGISTRATION_REQUEST, payload: user }),
    fetchPackages: () => dispatch({ type: GET_PACKAGES_REQUEST }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistrationForm);
