import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-secondary my-5'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60  bg-[#ECFEFF] text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to = "/dashboard" className='text-lg font-bold '>My Appointment</Link></li>
                    
                    <li><Link to ="/dashboard/review" className='text-lg font-bold text-black'>My Reviews</Link></li>
                    <li><Link to ="/dashboard/users" className='text-lg font-bold text-black'>All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;