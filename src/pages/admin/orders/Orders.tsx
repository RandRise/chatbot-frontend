import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { GET_ALL_ORDERS_REQUEST } from "../../../redux/actions/Actions";
import { Card, Col, Row, Table } from "antd";
import SpinLoader from "../../../components/common/spinLoader/SpinLoader";
import '../../../assets/styles/main.css'
import '../../../assets/styles/responsive.css'


const UserOrders: React.FC = () => {
    const dispatch = useDispatch();
    const { orders, loading } = useSelector((state: RootState) => state.orderInfoReducer);

    useEffect(() => {
        dispatch({ type: GET_ALL_ORDERS_REQUEST });
    }, [dispatch]);

    const columns = [
        { title: 'Order ID', dataIndex: 'id', key: 'id', className: 'tag-primary' },
        { title: 'Package Name', dataIndex: 'package_name', key: 'package_name', className: 'tag-primary' },
        { title: 'Unit Price', dataIndex: 'unitprice', key: 'unitprice', className: 'tag-primary' },
        { title: 'Message Count', dataIndex: 'msgcount', key: 'msgcount', className: 'tag-primary' },
        { title: 'Number of Months', dataIndex: 'numofmonths', key: 'numofmonths', className: 'tag-primary' },
        { title: 'Created Date', dataIndex: 'createdate', key: 'createdate', className: 'tag-primary' },
    ];

    return (
        <>
            <div className="tablespace">
                <Row gutter={[24, 0]}>
                    <Col xs="24" xl={24}>
                        <Card
                            bordered={false}
                            className="criclebox tablespace mb-24"
                            title="Orders"
                        >
                            <div className="table-responsive">
                                {loading ? (
                                    <SpinLoader size={100} />) : (
                                    <Table
                                        
                                        dataSource={orders}
                                        columns={columns}
                                        rowKey={(r) => r.id}
                                        className="ant-border-space" />)}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}
export default UserOrders;