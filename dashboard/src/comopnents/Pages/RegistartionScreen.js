import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import "./BlockStyle.css"

const RegistrationScreen = () => {
    const navigate = useNavigate();

    const loginHandler = () => {
        navigate("/LoginScreen");
    };

    return (
        <div className='form'>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: "10px", alignItems: "center", justifyContent: "center",background:"#F5F5F5",width:"400px",borderRadius:"20px"}}>
                <h1 style={{ textAlign: "center",color:'red' }}>Registration Page</h1>
                <TextField
                    required
                    id="user-name"
                    type='text'
                    label="User Name"
                    
                />
                <TextField
                    required
                    id="email"
                    type='email'
                    label="Email"

                />
                <TextField
                    required
                    id="phone-number"
                    type='text'
                    label="Phone Number"
                    
                />
                <TextField
                    required
                    id="password"
                    type='password'
                    label="Password"
                    
                />
                <TextField
                    required
                    id="confirm-password"
                    type='password'
                    label="Confirm Password"
                    
                />
                <div>
                <Button type="submit" variant='contained' style={{ backgroundColor: "red", color: "white" }} sx={{m:1}}>Sign Up</Button>
                <Button type="button" variant='contained' style={{ backgroundColor: "red", color: "white" }}  sx={{m:1}} onClick={loginHandler}>Login</Button>
                </div>
            </Box>
        </div>
    );
};

export default RegistrationScreen;






