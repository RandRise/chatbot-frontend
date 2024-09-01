import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserLogin from '../pages/authPages/userLogin/UserLogin';
import UserRegistration from '../pages/authPages/userRegistration/UserRegistration';
import ResetPassword from '../pages/authPages/userResetPassword/ResetPassword';
import ForgetPassword from '../pages/authPages/userForgetPassword/ForgetPassword';
import DashboardAdmin from '../components/Layouts/AdminLayout/adminLayout';
import DashboardUser from '../components/Layouts/UserLayout/userLayout';
import AdminRoute from './AdminRoute';
import UserRoute from './UserRoute';
import MyOrders from '../pages/userPages/UserOrders';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<UserLogin />} />
                <Route path="/register" element={<UserRegistration />} />
                <Route path="/" element={<Navigate to="/register" />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="forget-password" element={<ForgetPassword />} />
                <Route path="/admin" element={<AdminRoute><DashboardAdmin /></AdminRoute>} />
                <Route path="/user" element={<UserRoute><DashboardUser /></UserRoute>} >
                    <Route path="orders" element={<MyOrders />} />
                    {/* <Route path="bots" element= {< CreateBotForm onSuccess=}/>} */}
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
