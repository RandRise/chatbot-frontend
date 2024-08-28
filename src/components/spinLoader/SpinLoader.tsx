import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './index.css'; // Import CSS

const SpinLoader: React.FC<{ size?: number }> = ({ size = 24 }) => (
    <div className='spin-box'>
        <Spin indicator={<LoadingOutlined style={{ fontSize: size }} spin />} />
    </div>
);

export default SpinLoader;
