import React, { useState } from 'react';
import { UilEstate, UilClipboardAlt, UilUsersAlt, UilPackage, UilChart, UilSignOutAlt } from '@iconscout/react-unicons';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { motion } from 'framer-motion';
import './SidebarStyle.css';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const navigate = useNavigate();

    const SidebarData = [
        {
            icon: UilEstate,
            heading: 'Dashboard',
            path: '/Products',
        },
        {
            icon: UilClipboardAlt,
            heading: 'Orders',
            path: '/Orders',
        },
        {
            icon: UilUsersAlt,
            heading: 'Customers',
            path: '/Customers',
        },
        {
            icon: UilPackage,
            heading: 'Products',
            path: '/Products',
        },
        {
            icon: UilChart,
            heading: 'Analytics',
            path: '/Analytics',
        },
    ];

    const handleSignout = () => {
        setIsAuthenticated(false);
    };

    return (
        <motion.div className="sidebar">
            <div className="logo">
                <DashboardIcon style={{ color: 'red', fontSize: 'xx-large' }} />
                <span style={{ color: 'hotpink' }}>
                    St<span style={{ color: 'green' }}>o</span>re
                </span>
            </div>

            <div className="menu">
                {SidebarData.map((item, index) => (
                        <Link to={item.path} style={{ textDecoration: 'none' }} key={index}>
                            <div
                                className={selected === index ? 'menuItem active' : 'menuItem'}
                                onMouseOver={() => setSelected(index)} // Replace onClick with onMouseOver
                            >
                                <item.icon />
                                <span>{item.heading}</span>
                            </div>
                        </Link>
                    ))}


                <div className="menuItem">
                    {isAuthenticated ? (
                        <UilSignOutAlt onClick={handleSignout} />
                    ) : (
                        navigate('/')
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Sidebar;


