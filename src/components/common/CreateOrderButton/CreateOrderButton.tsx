import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { connect } from 'react-redux';
import CreateBotForm from '../../../botManagement/CreateBotForm/CreateBotForm';
import { RootState } from '../../../redux/reducers';
import { PackageModel } from '../../../models/PackageModel';
import '../../../assets/styles/main.css'
import '../../../assets/styles/responsive.css'

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
            <Button onClick={showModal} className='ant-btn-sm'
            >
                Create Web-bot
            </Button>
            <Modal
                title="Create New Bot"
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                className='ant-btn-sm'
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
