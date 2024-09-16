import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './index.css'
const SpinLoaderSign: React.FC<{ size?: number, color?: string }> = ({ size = 24, color = '#fff' }) => (
    <div className='spin-box'>
        <Spin indicator={<LoadingOutlined style={{ fontSize: size, color, marginRight: '400px', alignItems: 'center' }} spin />} />
    </div>
);

export default SpinLoaderSign;
