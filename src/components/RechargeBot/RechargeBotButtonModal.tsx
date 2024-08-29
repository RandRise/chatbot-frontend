import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import RechargeBotForm from '../RechargeBotForm/RechargeBotForm';
import { PackageModel } from '../../models/PackageModel';

interface RechargeBotButtonModalProps {
    botId: number;
    packages: PackageModel[];
}

const RechargeBotButtonModal: React.FC<RechargeBotButtonModalProps> = ({ botId, packages }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Recharge Bot
            </Button>
            <Modal
                title="Recharge Bot"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <RechargeBotForm onSuccess={handleCancel} botId={botId} packages={packages} />
            </Modal>
        </>
    );
};

export default RechargeBotButtonModal;
