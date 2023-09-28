import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../../contextApi/appContext";
import { toast } from 'react-toastify';
import { useNavigate, useLocation} from "react-router-dom";

function Copyright(props) {
    return (
        <Typography variant="body2" color="#012970" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Platinum Medical Evaluation
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function SignIn() {

    const [auth,setAuth]= useAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const notifyA = (msg, durationMilliseconds) => {
        toast.error(msg, {
          autoClose: durationMilliseconds,
        });
      };
    const notifyB = (msg, durationMilliseconds) => {
        toast.success(msg, {
          autoClose: durationMilliseconds,
        });
      };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(`http://localhost:5000/api/v1/auth/login`, {
          email,
          password,
        });
        if (res && res.data.success) {
          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem("auth", JSON.stringify(res.data));
          notifyB("Login Successfully", 2000);
          navigate(location.state || "/");
        } else {
          notifyA(res.data.message, 2000);
        }
      } catch (error) {
        console.log(error);
        notifyA("Something went wrong", 2000);
      }
    };
  
    /*
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //backend API CALL here......
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
*/
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" sx={{ color: "#012970" }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#012970' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{ fontWeight: 500 }}>
                        Platinum Medical Evaluations
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e)=>{
                                setEmail(e.target.value)
                              }} value={email}
                               />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e)=>{
                                setPassword(e.target.value)
                              }} value={password}
                               />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#012970', color: '#fff' }}
                        >
                            Sign In
                        </Button>
                        <Grid container sx={{ color: '#012970' }}>
                            <Grid item xs>
                                Don't have an account?
                            </Grid>
                            <Grid item>
                                <a href="mailto:michelle@housecallmd.com" style={{ textDecoration: 'none', color: 'inherit' }}>contact michelle@housecallmd.com</a>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
