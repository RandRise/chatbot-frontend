import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form, Input, Space, Typography } from 'antd';
import { USER_RESET_PASSWORD_REQUEST } from '../../../redux/actions/Actions';
import { userResetPasswordModel } from '../../../models/UserResetPasswordModel';
import { RootState } from '../../../redux/reducers';
import './index.css'
import SpinLoader from '../../../components/common/spinLoader/SpinLoader';

interface ResetPasswordProps {
    loading: boolean;
    response: any;
    isSuccess: boolean;
    resetPassword: (formData: userResetPasswordModel) => void;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ loading, response, isSuccess, resetPassword }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const userEmail = localStorage.getItem('userEmail') || '';

    const onFinish = (values: userResetPasswordModel) => {
        resetPassword(values);
    };

    useEffect(() => {
        if (response) {
            if (response.code === 200 && isSuccess) {
                navigate('/sign-in');
            }
        }
    }, [response, isSuccess, navigate]);

    return (
        <div className='page-container'>
            <div className='background'>
                <div className='user-reset-password'>
                    <Card className='form-box'>
                        <Form form={form} initialValues={{ email: userEmail }} onFinish={onFinish} layout="vertical" className='user-reset-password-form'>
                            <Space direction="vertical" size="middle" className='head-box'>
                                <Typography.Title level={4} className='head-title'>
                                    Setup a new password
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
                                name="resetCode"
                                label="Verification Code"
                                rules={[{ required: true, message: 'Please enter the reset code' }]}
                            >
                                <Input placeholder="Enter the reset code" />
                            </Form.Item>
                            <Form.Item
                                name="newPassword"
                                label="New Password"
                                rules={[{ required: true, message: 'Please enter your new password' }]}
                            >
                                <Input.Password placeholder="Enter your new password" style={{padding: '0px 11px'}}/>
                            </Form.Item>
                            <Form.Item>
                                <Button className='user-reset-password-btn' type="primary" htmlType="submit" block loading={loading}>
                                    {loading ? <SpinLoader /> : 'Reset Password'}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    loading: state.userResetPassword.loading,
    response: state.userResetPassword.response,
    isSuccess: state.userResetPassword.isSuccess,
});

const mapDispatchToProps = (dispatch: any) => ({
    resetPassword: (formData: userResetPasswordModel) => dispatch({ type: USER_RESET_PASSWORD_REQUEST, payload: formData }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
