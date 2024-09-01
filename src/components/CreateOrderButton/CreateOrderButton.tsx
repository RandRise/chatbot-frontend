import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { connect } from 'react-redux';
import CreateBotForm from '../CreateBotForm/CreateBotForm';
import { RootState } from '../../redux/reducers';
import { PackageModel } from '../../models/PackageModel';

interface CreateOrderButtonProps {
    packages: PackageModel[];
}

const CreateOrderButton: React.FC<CreateOrderButtonProps> = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSuccess = () => {
        handleCancel();
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Create New Bot
            </Button>
            <Modal
                title="Create New Bot"
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <CreateBotForm
                    onSuccess={handleSuccess}
                />
            </Modal>
        </>
    );
};

// Map state to props
const mapStateToProps = (state: RootState) => ({
    packages: state.pkgReducer.packages,
});

export default connect(mapStateToProps)(CreateOrderButton);
