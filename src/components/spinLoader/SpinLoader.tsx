import React from 'react';
import { Spin } from 'antd';
import './index.css'; // Import CSS

const SpinLoader: React.FC<{ size?: number }> = ({ size = 24 }) => (
    <div className='spin-box'>
        <Spin size="small" style={{ fontSize: size }} />
    </div>
);

export default SpinLoader;
