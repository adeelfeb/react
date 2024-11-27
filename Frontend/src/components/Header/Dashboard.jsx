import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';

function Dashboard() {
  const user = useSelector((state) => state.auth.userData);

  return (
    <div className="container mx-auto py-6">
      Just a temp DashBoard
      
    </div>
  );
}

export default Dashboard;
