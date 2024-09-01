// src/components/CreateBotForm/CreateBotForm.tsx

import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { connect } from 'react-redux';
import { CREATE_ORDER_REQUEST } from '../../redux/actions/Actions';
import { CreateOrderModel } from '../../models/OrderModel';
import { PackageModel } from '../../models/PackageModel';
import { RootState } from '../../redux/reducers';

const { Option } = Select;

interface CreateBotFormProps {
    onSuccess: () => void;
    packages: PackageModel[];
    createOrder: (values: CreateOrderModel) => void;
}

const CreateBotForm: React.FC<CreateBotFormProps> = ({ packages, createOrder, onSuccess }) => {
    const [isFreePackageDisabled, setIsFreePackageDisabled] = useState(false);
    const freePackageId = 4;

    useEffect(() => {
        const freePackageUsed = localStorage.getItem('freePackageUsed');
        console.log("Checking if free package was used: ", freePackageUsed); // Added for debugging
        if (freePackageUsed) {
            setIsFreePackageDisabled(true);
        }
    }, []);

    const onFinish = (values: CreateOrderModel) => {
        console.log("Form submitted with values: ", values); // Added for debugging
        if (values.packageId === freePackageId) {
            localStorage.setItem('freePackageUsed', 'true');
            setIsFreePackageDisabled(true); // Set the state immediately after using the free package
            console.log("Free package used, setting flag in localStorage."); // Added for debugging
        }

        createOrder(values);
        onSuccess();
    };

    return (
        <Form name="createBot" onFinish={onFinish}>
            <Form.Item
                name="packageId"
                label="Package"
                rules={[{ required: true, message: 'Please select a package!' }]}
            >
                <Select placeholder="Select a package">
                    {packages.map((pkg) => (
                        <Option
                            key={pkg.id}
                            value={pkg.id}
                            disabled={pkg.id === freePackageId && isFreePackageDisabled}
                        >
                            {pkg.name} - ${pkg.formattedPrice}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="domain"
                label="Domain"
                rules={[{ required: true, message: 'Please enter the domain!' }]}
            >
                <Input placeholder="http://Your-Website-Domain.com" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
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
