import React from 'react';
import { Row, Col, Card, Space, Button } from 'antd';
import { BotsModel, SubscriptionModel } from '../../../models/BotsModel';
import { PackageModel } from '../../../models/PackageModel';
import RechargeBotButtonModal from '../../../components/RechargeBot/RechargeBotButtonModal';
import RetrainBotButton from '../../../components/RetrainBot/RetrainButton';
import { showToast } from '../../../components/ToastComponent';
import './index.css'
interface UserBotsProps {
  bots: BotsModel[];
  packages: PackageModel[];
}

const UserBots: React.FC<UserBotsProps> = ({ bots, packages }) => {

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url).then(
      () => {
        showToast('success', 'Web-Bot Link Copied To Clipboard');
      },
      () => {
        showToast('error', 'Copy Failed');
      }
    );
  };

  const renderSubscriptions = (subscriptions: SubscriptionModel[]) => {
    return subscriptions.map((sub) => (
      <p key={sub.id}>
        Messages Remaining: {sub.msgcount}<br />
        Expiry Date: {new Date(sub.expirydate).toLocaleDateString()}
      </p>
    ));
  };

  return (
    <Row gutter={[16, 16]}>
      {bots.map((bot) => (
        <Col key={bot.id} span={8}>
          <Card title={bot.domain} bordered={true} className="bot-card">
            <p>
              Status: {bot.status === 1 ? 'Active' : 'Inactive'}
            </p>
            {renderSubscriptions(bot.subscriptions)}
            <Space>
              <RechargeBotButtonModal botId={bot.id} packages={packages} />
              <RetrainBotButton bot={bot} />

            </Space>
            <Button style={{ margin: 10 }}
              type="primary"
              onClick={() => handleCopyLink(bot.url)}
            >
              Copy Link
            </Button>
          </Card>
        </Col>
      ))
      }
    </Row >
  );
};

export default UserBots;
