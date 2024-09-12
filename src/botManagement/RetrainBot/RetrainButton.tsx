import React from 'react';
import { Button } from 'antd';
import { RetweetOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { RETRAIN_BOT_REQUEST } from '../../redux/actions/Actions';
import { BotsModel } from '../../models/BotsModel';

interface RetrainBotButtonProps {
    bot: BotsModel;
}

const RetrainBotButton: React.FC<RetrainBotButtonProps> = ({ bot }) => {
    const dispatch = useDispatch();

    const handleRetrain = () => {
        dispatch({ type: RETRAIN_BOT_REQUEST, payload: bot.id });
    };

    return (
        <Button 
            type="default" 
            icon={<RetweetOutlined />} 
            onClick={handleRetrain}
            style={{ fontSize: '16px', borderRadius: '4px' }}
        >
        </Button>
    );
};

export default RetrainBotButton;
