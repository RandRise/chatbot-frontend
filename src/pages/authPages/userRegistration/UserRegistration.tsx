import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Form, Input, Space, Typography, Row, Col } from 'antd';
import { RootState } from '../../../redux/reducers';
import { USER_REGISTRATION_REQUEST, GET_PACKAGES_REQUEST } from '../../../redux/actions/Actions';
import { userRegistrationModel } from '../../../models/UserRegistrationModel';
import { GenericResponse } from '../../../utils/GenericResponse';
import { PackageModel } from '../../../models/PackageModel';
import PackageCard from '../../../components/Packages/PackageCard';
import './index.css';
import SpinLoader from '../../../components/spinLoader/SpinLoader';

interface UserRegistrationProps {
    response: GenericResponse | null;
    isSuccess: boolean | null;
    loading: boolean;
    packages: PackageModel[];
    registerUser: (user: userRegistrationModel) => void;
    fetchPackages: () => void;
}

const UserRegistrationForm: React.FC<UserRegistrationProps> = ({ response, isSuccess, loading, packages, registerUser, fetchPackages }) => {
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
                navigate('/login');
            }, 500);
        }
    }, [isSuccess, response?.message, navigate]);

    return (
        <div className='user-register'>
            <header className='header'>
                <img src='/home/rand/Documents/RAG-Model/chatbot-frontend/transparent_2024-08-27T08-23-17.png' alt='Logo' className='logo' />
                Your Site Header
            </header>
            <div className='background'>
                <div className='content-wrapper'>
                    <Row gutter={[16, 16]} className='user-register-box'>
                        <Col xs={24} md={16} className='sec-left'>
                            <div className='info-section'>
                                <h2>Welcome to AI Chat Companion</h2>
                                <p>Your ultimate platform for personalized AI-driven chat solutions. Our AI Chat Companion is designed to cater to your diverse communication needs, whether you're looking for professional advice, educational assistance, or simply a friendly conversation.</p>
                                <p>Explore our tailored plans and choose the one that best fits your needs.Our AI Chat Companion Each plan is crafted to provide you with unique features and advantages, ensuring a seamless experience.</p>
                            </div>
                            <section className='packages-section'>
                                <Typography.Title level={3} >Subscription Plans</Typography.Title>
                                <Row gutter={[16, 16]}>
                                    {packages.map(pkg => (
                                        <Col xs={24} sm={12} md={6} key={pkg.id}>
                                            <PackageCard package={pkg} />
                                        </Col>
                                    ))}
                                </Row>
                            </section>
                        </Col>
                        <Col xs={24} md={8} className='sec-right'>
                            <div className=''>
                                <Card className='form-box'>
                                    <Form form={form} onFinish={onFinish} layout="vertical" className='register-form'>
                                        <Space direction="vertical" size="middle" align="center">
                                            <Typography.Title level={2} className='head-title'>
                                                Register
                                            </Typography.Title>
                                        </Space>

                                        <Form.Item
                                            name="firstname"
                                            label="First Name"
                                            rules={[{ required: true, message: 'Please enter your first name' }]}
                                        >
                                            <Input placeholder="Enter your first name" />
                                        </Form.Item>

                                        <Form.Item
                                            name="lastname"
                                            label="Last Name"
                                            rules={[{ required: true, message: 'Please enter your last name' }]}
                                        >
                                            <Input placeholder="Enter your last name" />
                                        </Form.Item>

                                        <Form.Item
                                            name="email"
                                            label="Email"
                                            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                                        >
                                            <Input placeholder="Enter your email address" />
                                        </Form.Item>
                                        <Form.Item
                                            name="domain"
                                            label="Website"
                                            rules={[{ required: true, type: 'url', message: 'Please enter your valid website url' }]}>
                                            <Input placeholder='Enter your website URL' />
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            label="Password"
                                            rules={[
                                                { required: true, message: 'Please enter your password' },
                                                { pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: 'Password must be at least 8 characters long and contain at least one number, one uppercase letter, and one lowercase letter' }
                                            ]}
                                        >
                                            <Input.Password placeholder="Enter your password" />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button className='register-btn' type="primary" htmlType="submit" block>
                                                {loading ? <SpinLoader /> : 'Register'}
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                    <div className='form-footer'>
                                        <Button type='link' className='form-link'>
                                            <Link to="/login">Already have an account? Login here</Link>
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <footer className='footer'>
                <p>Contact Us | About Us | Privacy Policy</p>
            </footer>
        </div>
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
