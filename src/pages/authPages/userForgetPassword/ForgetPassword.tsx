import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form, Input, Space, Typography } from 'antd';
import { USER_FORGET_PASSWORD_REQUEST } from '../../../redux/actions/Actions';
import { userForgetPasswordModel } from '../../../models/UserForgetPasswordModel';
import { RootState } from '../../../redux/reducers';
import './index.css'
interface ForgetPasswordProps {
    loading: boolean;
    response: any;
    isSuccess: boolean;
    forgotPassword: (email: string) => void;
}

const ForgotPassword: React.FC<ForgetPasswordProps> = ({ loading, response, isSuccess, forgotPassword }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values: userForgetPasswordModel) => {
        forgotPassword(values.email);
        localStorage.setItem('userEmail', values.email);
        form.resetFields();
    };

    useEffect(() => {
        if (response) {
            if (response.code === 200 && isSuccess) {
                navigate('/reset-password');
            }
        }
    }, [response, isSuccess, navigate]);

    return (
        <div className='page-container'>
            <div className='background'>
                <div className='user-forget-password'>
                    <Card className='form-box'>
                        <Form form={form} onFinish={onFinish} layout="vertical" className='forget-password-form'>
                            <Space direction="vertical" size="middle" className='head-box'>
                                <Typography.Title level={4} className='head-title'>
                                    Setup New Password
                                </Typography.Title>
                            </Space>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                            >
                                <Input placeholder="Enter your email address" />
                            </Form.Item>
                            <Form.Item>
                                <div className='form-footer'>

                                    <Button className='forget-password-btn' type="primary" htmlType="submit" block loading={loading}>
                                        Send Verification Code
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </Card>
                </div >
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    loading: state.userForgetPassword.loading,
    response: state.userForgetPassword.response,
    isSuccess: state.userForgetPassword.isSuccess,
});

const mapDispatchToProps = (dispatch: any) => ({
    forgotPassword: (email: string) => dispatch({ type: USER_FORGET_PASSWORD_REQUEST, payload: { email } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
