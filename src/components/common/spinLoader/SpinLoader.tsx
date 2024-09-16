import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// import '../../../assets/styles/main.css'; // Import CSS
import './index.css'

const SpinLoader: React.FC<{ size?: number, color?: string }> = ({ size = 24, color = '#000' }) => (
    <div className='spin-box'>
        <Spin indicator={<LoadingOutlined style={{ fontSize: size, color: color }} spin />} />
    </div>
);

export default SpinLoader;
