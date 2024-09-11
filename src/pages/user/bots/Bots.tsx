import React from 'react';
import { Card, Space, Button } from 'antd';
import { BotsModel, SubscriptionModel } from '../../../models/BotsModel';
import { PackageModel } from '../../../models/PackageModel';
import RechargeBotButtonModal from '../../../botManagement/RechargeBot/RechargeBotButtonModal';
import RetrainBotButton from '../../../botManagement/RetrainBot/RetrainButton';
import { showToast } from '../../../components/common/ToastComponent';
import { LinkOutlined } from '@ant-design/icons';
import '../../../assets/styles/main.css';
import './../../../assets/styles/responsive.css'

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
    <div className="container">
      <h1 className="container-title">Your Web-Bots</h1>
      <div className="gradient-cards">
        {bots.map((bot) => (
          <div key={bot.id} className="container-card-bots">
            <Card
              hoverable
              className="card-bots"

            >
              <Card.Meta
                title={<h2 className="card-bots-title">{bot.domain}</h2>}
                description={
                  <>
                    <p className="card-bots-description">Status: {bot.status === 1 ? 'Active' : 'Inactive'}</p>
                    <p className="card-bots-description">{renderSubscriptions(bot.subscriptions)}</p>
                  </>
                }
              />
              <Space direction="vertical" style={{ marginTop: '20px' }}>
                <RechargeBotButtonModal botId={bot.id} packages={packages} />
                <RetrainBotButton bot={bot} />
                <Button
                  icon={<LinkOutlined />}
                  type="primary"
                  onClick={() => handleCopyLink(bot.url)}
                >
                  Copy Link
                </Button>
              </Space>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBots;
