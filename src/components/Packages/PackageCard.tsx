import React from 'react';
import { Card } from 'antd';
import { PackageModel } from '../../models/PackageModel';
import './index.css'
interface PackageCardProps {
    packages: PackageModel
}

const PackageCard: React.FC<PackageCardProps> = ({ packages }) => {
    const getCardClass = () => {
        switch (packages.name.toLowerCase()) {
            case 'gold':
                return 'package-card gold';
            case 'silver':
                return 'package-card silver';
            case 'bronze':
                return 'package-card bronze';
            default:
                return 'package-card';
        }
    };

    return (
        <Card className={getCardClass()} style={{width:'1200px', padding:'48px', height:'auto'}}>
            <h2>{packages.name}</h2>
            <ul>
                <li>Messages: {packages.msgcount}</li>
                <li>Duration: {packages.numofmonths} months</li>
            </ul>
            <div className="price">Price: {packages.formattedPrice}</div>
        </Card>
    );
};

export default PackageCard;
