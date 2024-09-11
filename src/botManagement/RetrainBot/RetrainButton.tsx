// components/RetrainBotButton.tsx
import React from 'react';
import { Button } from 'antd';
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
        
    }

    return (
        <Button type='default' onClick={handleRetrain}>
            Update Bot
        </Button>
    );
}

export default RetrainBotButton;
