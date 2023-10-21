import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import ProductSearch from './ProductSearch'; // Import your ProductSearch component
// import { useState } from 'react';

function ResponsiveAppBar() {
    // const [searchTerm, setSearchTerm] = useState('');

    return (
        <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <span>
                <DashboardIcon style={{ color: "red", fontSize: "x-large" }} />
            </span>
            <span style={{ color: "red", fontSize: "x-large" }}>Store</span>
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'relative', background: 'white', borderRadius: '5px' }}>
                <div
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '10px',
                }}
                >
                <SearchIcon style={{ color: "gray", fontSize: "25px" }} />
                </div>
                <InputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                style={{ paddingLeft: '40px', border: "2px solid black" }}
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            </div>
            <nav>
            <Link
                variant="button"
                color="text.primary"
                to="/Dashboard"
                sx={{ my: 1, mx: 1.5 }}
                style={{ textDecoration: "none", padding: "10px" }}
            >
                Dashboard
            </Link>
            <Link
                variant="button"
                color="text.primary"
                to="/Orders"
                sx={{ my: 1, mx: 1.5 }}
                style={{ textDecoration: "none", padding: "10px" }}
            >
                Orders
            </Link>
            <Link
                variant="button"
                color="text.primary"
                to="/Customers"
                sx={{ my: 1, mx: 1.5 }}
                style={{ textDecoration: "none", padding: "10px" }}
            >
                Customers
            </Link>
            <Link
                variant="button"
                color="text.primary"
                to="/Products"
                sx={{ my: 1, mx: 1.5 }}
                style={{ textDecoration: "none", padding: "10px" }}
            >
                Products
            </Link>
            <Link
                variant="button"
                color="text.primary"
                to="/Analytics"
                sx={{ my: 1, mx: 1.5 }}
                style={{ textDecoration: "none", padding: "10px" }}
            >
                Analytics
            </Link>
            {/* <Link
                variant="button"
                color="text.primary"
                to="/ProductSearch"
                sx={{ my: 1, mx: 1.5 }}
                style={{ textDecoration: "none", padding: "10px" }}
            >
                Products Search
            </Link> */}
            </nav>
        </Toolbar>
        </AppBar>
    );
}

export default ResponsiveAppBar;


