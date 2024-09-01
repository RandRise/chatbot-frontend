import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card, Form, Input, Space, Typography } from 'antd';
import { RootState } from '../../../redux/reducers';
import { USER_LOGIN_REQUEST } from '../../../redux/actions/Actions';
import { userLoginModel } from '../../../models/UserLoginModel';
import { LoginResponse } from '../../../utils/GenericResponse';
import SpinLoader from '../../../components/spinLoader/SpinLoader';
import './index.css'; // Import CSS
import { Link } from 'react-router-dom';

interface UserLoginProps {
    response: LoginResponse | null;
    isSuccess: boolean | null;
    loading: boolean;
    loginUser: (user: userLoginModel) => void;
}

const UserLogin: React.FC<UserLoginProps> = ({ response, isSuccess, loading, loginUser }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess === true && response) {
            const { token, role } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            if (role === 'admin') {
                navigate('/admin');
            } else if (role === 'user') {
                navigate('/user/bots');
            }
        }
    },
        [isSuccess, navigate, response, response?.message])

    const onFinish = (values: userLoginModel) => {
        loginUser(values);
    };

    return (
        <><div className='page-container>' />
            <header className='header'>
                <img src='R.svg' alt='Logo' className='logo' />
                Your AI Chat Companion
            </header>
            <div className='background'>
                <div className='user-login'>
                    <Card className='form-box'>
                        <Form form={form} onFinish={onFinish} layout="vertical" className='login-form'>
                            <Space direction="vertical" size="middle" className='head-box' align="center">
                                <Typography.Title level={2} className='head-title'>
                                    Login
                                </Typography.Title>
                            </Space>

                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                            >
                                <Input placeholder="Enter your email address" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[{ required: true, message: 'Please enter your password' }]}
                            >
                                <Input.Password placeholder="Enter your password" />
                            </Form.Item>

                            <Form.Item>
                                <Button className='login-btn' type="primary" htmlType="submit" block>
                                    {loading ? <SpinLoader /> : 'Login'}
                                </Button>
                            </Form.Item>
                        </Form>
                        <div className='form-footer'>
                            <Button type='link' className='form-link' style={{ display: 'contents' }}>
                                <Link to="/register"> Don't have an account? Register here</Link>
                            </Button>
                            <Space>
                                <Button type='link' className='form-link'>
                                    <Link to="/forget-password"> Forgot Password?</Link>
                                </Button>
                                <Button type='link' className='form-link'>
                                    <Link to="/reset-password"> Reset Password</Link>
                                </Button>
                            </Space>
                        </div>
                    </Card>
                </div>
            </div >
            <div>
                <footer className='footer'>
                    <p> Contact Us | About Us | Privacy Policy</p>
                </footer>
            </div></>


    );
};

const mapStateToProps = (state: RootState) => ({
    response: state.userLogin.response,
    isSuccess: state.userLogin.isSuccess,
    loading: state.userLogin.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
    loginUser: (user: userLoginModel) => dispatch({ type: USER_LOGIN_REQUEST, payload: user }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
