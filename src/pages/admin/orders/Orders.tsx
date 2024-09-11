import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { GET_ALL_ORDERS_REQUEST } from "../../../redux/actions/Actions";
import { Table } from "antd";
import SpinLoader from "../../../components/common/spinLoader/SpinLoader";

const UserOrders: React.FC = () => {
    const dispatch = useDispatch();
    const { orders, loading } = useSelector((state: RootState) => state.orderInfoReducer);

    useEffect(() => {
        dispatch({ type: GET_ALL_ORDERS_REQUEST });
    }, [dispatch]);

    const columns = [
        { title: 'Order ID', dataIndex: 'id', key: 'id' },
        { title: 'Package Name', dataIndex: 'package_name', key: 'package_name' },
        { title: 'Unit Price', dataIndex: 'unitprice', key: 'unitprice' },
        { title: 'Message Count', dataIndex: 'msgcount', key: 'msgcount' },
        { title: 'Number of Months', dataIndex: 'numofmonths', key: 'numofmonths' },
        { title: 'Created Date', dataIndex: 'createdate', key: 'createdate' },
    ];

    return (
        <div>
            <h2>Orders</h2>
            {loading ? (
                <SpinLoader size={100} />
            ) : (
                <Table dataSource={orders} columns={columns} rowKey={(r) => r.id} />

            )}

        </div>
    );
}
export default UserOrders;