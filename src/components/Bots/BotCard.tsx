import React from "react";
import { Card, Typography } from 'antd'
import { BotsModel } from "../../models/BotsModel";
import './index.css';

interface BotCardProps {
    bot: BotsModel;
}

const BotCard: React.FC<BotCardProps> = (props) => {
    return (
        <div>
            <Card title={props.bot.domain} className="bot-card">
                <Typography.Text>Messages: {props.bot.status}</Typography.Text>
                <br />
                <Typography.Text>Duration: {props.bot.status} months</Typography.Text>
                <br />
                <Typography.Text>Price: {props.bot.id}</Typography.Text>
            </Card>
        </div>
    );
};
export default BotCard;