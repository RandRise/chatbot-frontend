import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import { connect } from 'react-redux';
import { CREATE_ORDER_REQUEST } from '../../redux/actions/Actions';
import { CreateOrderModel } from '../../models/OrderModel';
import { PackageModel } from '../../models/PackageModel';
import { RootState } from '../../redux/reducers';
import '../../assets/styles/main.css'
import '../../assets/styles/responsive.css'

const { Option } = Select;

interface CreateBotFormProps {
    onSuccess: () => void;
    packages: PackageModel[];
    createOrder: (values: CreateOrderModel) => void;
}

const CreateBotForm: React.FC<CreateBotFormProps> = ({ packages, createOrder, onSuccess }) => {
    const [form] = Form.useForm();


    const onFinish = (values: CreateOrderModel) => {
        createOrder(values);
        form.resetFields();
        onSuccess();
    };

    return (
        <Form name="createBot" onFinish={onFinish} form={form} className='ant-col' layout='vertical'>
            <Form.Item
                className='ant-col'
                name="packageId"
                label="Package"
                rules={[{ required: true, message: 'Please select a package!' }]}
            >
                <Select placeholder="Select a package">
                    {packages.map((pkg) => (
                        <Option key={pkg.id} value={pkg.id}>
                            {pkg.name} - ${pkg.formattedPrice}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                className='ant-col'
                name="domain"
                label="Domain"
                rules={[{ required: true, message: 'Please enter the domain!' }]}
            >
                <Input placeholder="http://Your-Website-Domain.com" />
            </Form.Item>
            <Form.Item>
                <Button className='signup' type="primary" htmlType="submit">
                    Add New Web-Bot
                </Button>
            </Form.Item>
        </Form>
    );
};

const mapStateToProps = (state: RootState) => ({
    packages: state.pkgReducer.packages,
});

const mapDispatchToProps = (dispatch: any) => ({
    createOrder: (values: CreateOrderModel) => dispatch({ type: CREATE_ORDER_REQUEST, payload: values }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBotForm);
