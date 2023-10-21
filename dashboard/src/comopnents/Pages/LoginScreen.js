import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import { LoginInfo } from '../FrontScreen';
import "./BlockStyle.css"

const LoginScreen = () => {
    const navigate = useNavigate();
    const loginInfo = useContext(LoginInfo);

    const [userInput, setUserInput] = useState({
        email: "",
        password: ""
    });

    const [dataAuthentication, setDataAuthentication] = useState([]);
    const [loginSuccess, setLoginSuccess] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setDataAuthentication(response.data))
            .catch(err => console.log(err));
    }, []);

    const inputHandler = (event) => {
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const user = dataAuthentication.find((userData) => {
            return userData.email === userInput.email && userData.username === userInput.password;
        });

        if (user) {
            setLoginSuccess(true);
            loginInfo.loginUser();
            navigate('/Dashboard'); 
        } else {
            setLoginSuccess(false);
        }

        setUserInput({
            email: "",
            password: ""
        });
    }

    const signUpHandler = () => {
        navigate('/'); 
    }

    return (
        <div className='form'>
            
            
            <Box component="form" onSubmit={submitHandler} sx={{ display: 'flex', flexDirection: 'column', gap: "10px", alignItems: "center", justifyContent: "center",background:"#F5F5F5",width:"400px",borderRadius:"20px" }}>
                <h1 style={{ textAlign: "center",color:'red'  }}>Login Page</h1>
                <TextField
                    required
                    id="email"
                    type='email'
                    label="Email"
                    value={userInput.email}
                    onChange={inputHandler}
                    name='email'

                />
                <TextField
                    required
                    id="password"
                    type='password'
                    label="Password"
                    value={userInput.password}
                    onChange={inputHandler}
                    name='password'

                />
                {loginSuccess !== null && <p>{loginSuccess ? "Login Successfully" : "Username or password is invalid"}</p>}
                <div>
                    <Button type="submit" variant='contained' style={{ backgroundColor: "red", color: "white" }} sx={{ m: 1 }}>Login</Button>
                    <Button type="button" variant='contained' style={{ backgroundColor: "red", color: "white" }} sx={{ m: 1 }} onClick={signUpHandler}>Sign Up</Button>
                </div>
            </Box>
        </div>
    )
}

export default LoginScreen;





