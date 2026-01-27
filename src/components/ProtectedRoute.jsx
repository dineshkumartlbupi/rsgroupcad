import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');

    // Ideally we should also verify the token expiry or validity via an API call,
    // but for now, existence check is the first line of defense.

    return token ? <Outlet /> : <Navigate to="/client-portal" replace />;
};

export default ProtectedRoute;
