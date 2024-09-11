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
import './../../../assets/images/image_not_found.jpg'
import './index.css'

interface UserBotsProps {
  bots: BotsModel[];
  packages: PackageModel[];
}
const defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///9UVFT///tPT09aWlqCgoJ+fn5eXlxVVVVJSUm6urZJSUr///2/v7+8vLxMTExERET4+PjHx8fQ0NB2dna2trbj4+OmpqaTk5Pr6+uenp5mZmZoaGhAQEDc3Nzm5uaJiYlwcHAzMzOioqKurq6Sko5tbmmLjIfW19La2tZERUB5eXVmZ2KXmJXv8OugjBEDAAAGJUlEQVR4nO2de3uiOBSHk6ZqMgUJKAoqVFvntjvO9/94m4AgeJ3ubi70+b1/tH2s2Lw9kJOEAxACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKyQJ6uRHVZJ7sBvNhciYpSZR/0NIeYzy36vc8ko5ZxT86g/wimT84VNwVRaMDuDydSeYCaolej1eKYysyV4ELbtjoiDHcGpg130iJzaEFy4E1SKNrqbuUNBSufmBWcuQ6iCaD4vjplTQzY2LRhHTgUpjWLDhomrTNEgEsOGK2E91ffg0cqw4cjtYagOxNEnN+Sf3tB8ZwpDGMIQhjCEIQxhCEMYwhCGRgxNT/nPP9+6IRfs2ST0fNXEuuHL3uzaV7x/cWvIvpLgySQB+cqcGoovRv204hfh2NBsCLXhi2NDYtiQ+GAYhHRiAhoGnhiS8Ky/+5+QU+KNoZmTGQKGMDRvyCkTUghd0yT/xXnHARhS9pyW5XSzTcpy+XHFARiydWfL1w+feRyAoUiS7PCqN5tlq/L9o1NLPw057U7p1pJFugQmLKJIbj4o6KVhFEVMvYFFonPUrV9n0UfCx5o3e2fImcjCcLkp1sswXLXtpEyKe3V+vIn58RubbI9HrHeGbFJX8taFWfHuz+Km/i+SrydUClZ56d7puE94ZygWJG8m/HFOYvknazismId6qzif7nRRLpWl2tzTGO4SWhRj7Rhvi4JNR+yRIafRNxXxaooZEPJzJ3l00B+YCi8NqdD73E69aSt04x9HkMv33mSXLAWrfqgrr/wz5FVUsnIp6xLih4piSfqGaTEj1Q+ryEvDYxPUEPTPRi9R1l8gCPKifiUgufDYsNVjzddbvjw+GQYKMhfx0bD6O94aVo1ngk+ehRrJVN+uOoqQnAz1Z4dvYdvrlNJvQy7GutPP9wedHF+zq4mDk85aK9GFnboA+GhIdn4bsk6xsk4f71emTiwj/Rhui7xjmAjus6FcLPbLYyFouVzOyKVgtZN2DWdve9IxJH7HkG4LEcm5DuC7nlbMr8wrqsFLaxgTuu71rCSNvDbU7+Jyf6/wXSy6huo/UfZzR+y1YT1f4CJrD0CuRjz9KUYvhsHibXV2joesCo8N2+awthN9mZG96HapVcF2a7ju9ayVYf7mvyFvsj3naoAWkHE3MYr3xlDl+vRtdnGajoy/eG/YadcvbZL3Np6QtufMi+9PFwQ/9v6ct3hoKBc6QiQpuq+VreFYxpeGT08/hmMo9pWLyuqd1K8mWscxWvKW3DxJNwxDtqldVH7s9qYirWOoh2u3BIdhyOWi6UaCH0X39foyLT1cG7ZhtDxlAnI4NZjXitVwbdCG1dp+mwqCyekTOJVZTPjmPBUOzJAXi55h2RvHRXxc9AaovhvqcVl/+bfK9cEpRnq5qfNbFcZV7/e+G6oWiP5cUPWjvRar7LfpfgZ7vl+v4pshF7ty2ttnZdlP5oE+z3Yan+rOZlCG1U0BOpez6330Iob6lgzNuYpo+6BszDNDmRJtkLXGVT96YUh27XK4iAdkyBn9ebT51hjIxbVWB3HzKX+Fj2qq3Ne1nQyjTd6E4zdr9tHrASJJvSOzvx+WxXlR11YbqkOwbS6pkx5b34iQHoLrvFL8fiTo0V6q761ySuv1/V1keSNEagj+XC/kDMaQRT9JN20Hep6kZvE3DNWsfiYvUqXPhsXmcnbwi03ujTeDw8vNEPtnmI6uDCx/6/HmHYWAr8jVmb2HhkGzGt830K/eMyzjOwNuzwzJNcMnlcvvGl7fyktDo8DQvKHpWn33hojh8A0Rw/+K+7mFeUO380Pj1649ke9ur12jIjV8/WF6thZr/xrSF9PXkFLHhp//OmDrwBCGMIQhDGEIQxjCEIYwhOFADN3eC/rz3ynZvOHK8T3ZOTN9P+/Pf0/23LWhNP5gpE//bARdQ+GyN7XwfItOTZoLduYFSVk8bocxqouljLN3+KygvQ3BbnGlZYS1R1plLqLILT6zi5C0sJ8zWGHxuWuqu5lLq10qZ3JnpZPpMJtLEbHIwvMPGYscPP9Qk4fZaDQ2z2iUhXqoZvoxSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA8Q8eW50GbEKTywAAAABJRU5ErkJggg=='

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
            <Card hoverable className="card-bots" >
            <div className="card-bots-image">
                <img 
                  src={bot.metadata?.image || defaultImage} 
                  alt={bot.metadata?.url || 'Bot Image'} 
                  style={{ width: 'auto', height: '120px' }} 
                />
              </div>
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
                    <p className="card-bots-status">Status: {bot.status === 1 ? 'Active' : 'Inactive'}</p>
                    {renderSubscriptions(bot.subscriptions)}
                  </>
                }
              />
              <Space direction="vertical" style={{ marginTop: '20px' }}>
                <RechargeBotButtonModal botId={bot.id} packages={packages} />
                <RetrainBotButton bot={bot} />
                <Button
                  className='ant-btn-primary'
                  icon={<LinkOutlined />}
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
