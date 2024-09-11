import React from 'react';
import { Card, Typography } from 'antd';
import { PackageModel } from '../../models/PackageModel';
import '../../assets/styles/main.css';  // Importing the CSS for package cards

interface PackageCardProps {
    package: PackageModel;
}

const PackageCard: React.FC<PackageCardProps> = (props) => {
    return (
        <Card title={props.package.name.toUpperCase()} className="package-card">
            <Typography.Text>Messages: {props.package.msgcount}</Typography.Text>
            <br />
            <Typography.Text>Duration: {props.package.numofmonths} months</Typography.Text>
            <br />
            <Typography.Text>Price: {props.package.formattedPrice}</Typography.Text>
        </Card>
    );
};

export default PackageCard;
