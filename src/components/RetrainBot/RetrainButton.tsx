
import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { RETRAIN_BOT_REQUEST } from '../../redux/actions/Actions';

interface RetrainBotButtonProps {
    botId: number;
}

const RetrainBotButton: React.FC<RetrainBotButtonProps> = (props) => {
    const dispatch = useDispatch();

    const handleRetrain = () => {
        dispatch({ type: RETRAIN_BOT_REQUEST, payload: props.botId })
    }

    return (
        <Button type='default' onClick={handleRetrain}>
            Update Bot
        </Button>
    )
}


export default RetrainBotButton;