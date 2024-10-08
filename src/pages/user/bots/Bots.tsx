import React from 'react';
import { Card, Tooltip } from 'antd';
import { LinkOutlined, RetweetOutlined } from '@ant-design/icons';
import { BotsModel } from '../../../models/BotsModel';
import { PackageModel } from '../../../models/PackageModel';
import RechargeBotButtonModal from '../../../botManagement/RechargeBot/RechargeBotButtonModal';
import { showToast } from '../../../components/common/ToastComponent';
import '../../../assets/styles/main.css';
import './../../../assets/styles/responsive.css';
import './index.css';
import { useDispatch } from 'react-redux';
import { RETRAIN_BOT_REQUEST } from '../../../redux/actions/Actions';
import defaultImage from '../../../assets/images/Default-Image.jpg';
import SpinLoader from '../../../components/common/spinLoader/SpinLoader';

interface UserBotsProps {
  bots: BotsModel[];
  packages: PackageModel[];
  loading: boolean;
}

const UserBots: React.FC<UserBotsProps> = ({ bots, packages, loading }) => {
  const dispatch = useDispatch();

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

  const getStatusChip = (status: number) => (
    <div className={`chip ${status === 1 ? 'active' : 'inactive'}`}>
      {status === 1 ? 'Active' : 'Inactive'}
    </div>
  );

  const getMessagesChip = (msgcount: number) => (
    <div className="chip messages">
      Messages Remaining: {msgcount}
    </div>
  );

  const getExpiryChip = (expiryDate: string) => (
    <div className="chip expiry">
      Expiry Date: {new Date(expiryDate).toLocaleDateString()}
    </div>
  );

  return (
    <div className="container">
      <h1 className="container-title">Your Web-Bots</h1>
      {loading ? (
        <div className="gradient-cards" style={{ height: '100vh', justifyContent:'center', alignContent:'center' }}>
          <SpinLoader size={100} color='#007BFF' />
        </div>
      ) : (
        <div className="gradient-cards">
          {bots.map((bot) => (
            <Card
              style={{ boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.5)' }}
              key={bot.id}
              hoverable
              className="card-bots"
              cover={
                <img
                  src={bot.metadata?.image || defaultImage}
                  alt={bot.metadata?.title || 'Bot Image'}
                  style={{
                    objectFit: 'cover',
                    maxHeight: '200px'
                  }}
                />
              }
              actions={[
                <Tooltip title="Recharge Bot">
                  <RechargeBotButtonModal botId={bot.id} packages={packages} />
                </Tooltip>,
                <Tooltip title="Retrain your Web-bot on new website info">
                  <RetweetOutlined style={{ fontSize: '24px' }} onClick={() => dispatch({ type: RETRAIN_BOT_REQUEST, payload: bot.id })} />
                </Tooltip>,
                <Tooltip title="Copy Web-bot script">
                  <LinkOutlined
                    style={{ fontSize: '24px' }}
                    onClick={() => handleCopyLink(bot.url)}
                  />
                </Tooltip>
              ]}
            >
              <Card.Meta
                title={
                  <a href={bot.metadata?.url || bot.domain} target="_blank" rel="noopener noreferrer">
                    <h2 className="card-bots-title">{bot.metadata?.title || bot.domain}</h2>
                  </a>
                }
                description={
                  <>
                    <p className="card-bots-description">
                      {bot.metadata?.description || 'No description available.'}
                    </p>
                    <div className="chip-container" style={{ textAlign: 'left' }}>
                      {getStatusChip(bot.status)}
                      {bot.subscriptions && bot.subscriptions.length > 0 && getMessagesChip(bot.subscriptions[0].msgcount)}
                      {bot.subscriptions && bot.subscriptions.length > 0 && getExpiryChip(bot.subscriptions[0].expirydate)}
                    </div>
                  </>
                }
              />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserBots;
