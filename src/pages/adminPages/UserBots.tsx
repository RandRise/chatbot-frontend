import React from 'react';
import { Table } from 'antd';
import { BotsModel, SubscriptionModel } from '../../models/BotsModel';


interface UserBotsProps {
  bots: BotsModel[];
}

const UserBots: React.FC<UserBotsProps> = ({ bots }) => {
  const renderSubscriptions = (subscriptions: SubscriptionModel[]) => {
    return subscriptions.map((sub) => (
      <div key={sub.id}>
        <p>Messages Remaining: {sub.msgcount}</p>
        <p>Expiry Date: {new Date(sub.expirydate).toLocaleDateString()}</p>
      </div>
    ));
  };

  const columns = [
    {
      title: 'Domain',
      dataIndex: 'domain',
      key: 'domain',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: number) => (status === 1 ? 'Active' : 'Inactive'),
    },
    {
      title: 'Subscriptions',
      dataIndex: 'subscriptions',
      key: 'subscriptions',
      render: (subscriptions: SubscriptionModel[]) => renderSubscriptions(subscriptions),
    },
  ];

  const dataSource = bots.map((bot) => ({
    key: bot.id,
    domain: bot.domain,
    status: bot.status,
    subscriptions: bot.subscriptions,
  }));

  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};

export default UserBots;
