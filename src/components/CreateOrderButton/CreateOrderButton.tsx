// src/components/CreateBotButtonModal/CreateBotButtonModal.tsx

import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { connect } from 'react-redux';
import CreateBotForm from '../CreateBotForm/CreateBotForm';
import { RootState } from '../../redux/reducers';



const CreateOrderButton = () => {
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
                Create New Bot
            </Button>
            <Modal
                title="Create New Bot"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <CreateBotForm onSuccess={handleCancel}  />
            </Modal>
        </>
    );
};

// Map state to props
const mapStateToProps = (state: RootState) => ({
    packages: state.pkgReducer.packages,
});

export default connect(mapStateToProps)(CreateOrderButton);
