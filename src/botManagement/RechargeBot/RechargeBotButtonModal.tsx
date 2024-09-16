import React, { useState } from 'react';
import { Modal } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';
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
      <DollarCircleOutlined onClick={showModal} style={{ fontSize: '24px', cursor: 'pointer' }} />
      <Modal
        title="Recharge Bot"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <RechargeBotForm onSuccess={handleCancel} botId={botId} packages={packages} />
      </Modal>
    </>
  );
};

export default RechargeBotButtonModal;
