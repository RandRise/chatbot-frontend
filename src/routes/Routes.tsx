import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserLogin from '../pages/auth/login/Login';
import UserRegistration from '../pages/auth/registration/Signup';

import ResetPassword from '../pages/auth/resetPassword/ResetPassword';
import ForgetPassword from '../pages/auth/forgetPassword/ForgetPassword';
import DashboardAdmin from '../components/Layouts/AdminLayout/adminLayout';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import MyOrders from '../pages/user/orders/Orders';
import UserOrders from '../pages/admin/orders/Orders';
import UserLayout from '../components/Layouts/UserLayout/userLayout';
import UserBots from '../pages/user/bots/Bots';
import UserBotsWrapper from '../pages/user/bots/UserBotsWrapper';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/sign-in" element={<UserLogin />} />
                <Route path="/sign-up" element={< UserRegistration />} />
                <Route path="/" element={<Navigate to="/sign-up" />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="forget-password" element={<ForgetPassword />} />

                <Route path="/admin" element={<AdminRoute><DashboardAdmin /></AdminRoute>} >
                    <Route path="orders" element={<UserOrders />} />
                </Route>
                <Route element={
                    <UserRoute>
                        <UserLayout />
                    </UserRoute>} >
                    <Route path="user/bots" element={< UserBotsWrapper />} />
                    <Route path="user/orders" element={<MyOrders />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

// Simple NotFound component for unmatched routes
const NotFound: React.FC = () => {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default AppRoutes;
