import React from 'react';
import { Form, Select, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { RECHARGE_BOT_REQUEST } from '../../redux/actions/Actions';
import { PackageModel } from '../../models/PackageModel';

const { Option } = Select;

interface RechargeBotFormProps {
    onSuccess: () => void;
    botId: number;
    packages: PackageModel[];
}

const RechargeBotForm: React.FC<RechargeBotFormProps> = ({ onSuccess, botId, packages }) => {
    const dispatch = useDispatch();

    const onFinish = (values: { packageId: number }) => {
        const payload = {
            botId,
            packageId: values.packageId
        };
        dispatch({ type: RECHARGE_BOT_REQUEST, payload });
        onSuccess();
    };

    return (
        <Form
            name="rechargeBot"
            onFinish={onFinish}
        >
            <Form.Item
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
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Recharge
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RechargeBotForm;
