import React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css';
import SignOutButton from '../Buttons/SignOutButton/SignOutButton';
import { useAuth } from '../../contextApi/appContext'; 
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Nav({ onMenuIconClick }) {

  const navigate = useNavigate();
  const [auth , setAuth] = useAuth();
  
  const notifyB = (msg, durationMilliseconds) => {
    toast.success(msg, {
      autoClose: durationMilliseconds,
    });
  };
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    notifyB("Logout Successfully", 2000);
    navigate('/login');
  };
  return (
    <>
    
     {auth?.user ? ( // User is authenticated
                
     <Box sx={{ flexGrow: 1 }}>
     <AppBar position="fixed" className="appBar">
       <Toolbar>
         <Typography variant="h6" component="div" sx={{color:'#012970'}} >
           Platinum Medical Evaluations
         </Typography>
       
        
         <IconButton
           size="large"
           edge="start"
           color="inherit"
           aria-label="menu"
           className="iconButton"
           onClick={onMenuIconClick}
         >
           <MenuIcon sx={{ color: '#012970', fontSize: 32 }} />
         </IconButton>
         <Box sx={{ flexGrow: 1 }} />
         <SignOutButton onClick={handleLogout} />
       </Toolbar>
       
     </AppBar>
   </Box>
            ) : ( // User is not authenticated
                // <SignIn />
               <div> </div>
                
            )}
   </>
  );
}
