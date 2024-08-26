import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserLogin from '../pages/authPages/userLogin/UserLogin';
import UserRegistration from '../pages/authPages/userRegistration/UserRegistration';
import ResetPassword from '../pages/authPages/userResetPassword/ResetPassword';
import ForgetPassword from '../pages/authPages/userForgetPassword/ForgetPassword';
import DashboardAdmin from '../components/Layouts/AdminLayout/adminLayout';
import DashboardUser from '../components/Layouts/UserLayout/userLayout';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<UserLogin />} />
                <Route path="/register" element={<UserRegistration />} />
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="forget-password" element={<ForgetPassword />} />
                <Route path="/admin/*" element={<PrivateRoutes role="admin"><DashboardAdmin /></PrivateRoutes>} />
                <Route path="/user/*" element={<PrivateRoutes role="user"><DashboardUser /></PrivateRoutes>} />
                <Route path="*" element={<NotFound />} />
                <Route path="/admin/" element={<DashboardAdmin />} />
            </Routes>
        </Router>
    );
};

// Component for handling private routes based on roles
const PrivateRoutes: React.FC<{ children: React.ReactNode; role: string }> = ({ children, role }) => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role'); // Assuming you store the user role in localStorage

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (userRole !== role) {
        return <Navigate to="/" />;
    }

    return <>{children}</>;
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
