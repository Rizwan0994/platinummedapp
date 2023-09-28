import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Popover, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/CloudUpload';
import FlexbookerIcon from '@mui/icons-material/LibraryBooks';
import ZipMasterIcon from '@mui/icons-material/Archive';
import PsychStateIcon from '@mui/icons-material/Assessment';
import DoctorScheduleIcon from '@mui/icons-material/DateRange';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Sidebar.css';
import { useAuth } from '../../contextApi/appContext';
import { blue } from '@mui/material/colors';
export default function Sidebar({ open, onClose }) {
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const [auth , setAuth] = useAuth();
  const handleSettingsClick = (event) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };

  const isSettingsMenuOpen = Boolean(settingsAnchorEl);

  return (
    <>
    {auth.user? (
      <Drawer anchor="left" variant="persistent" open={open} onClose={onClose} className={`sidebar ${open ? 'open drawer' : 'drawer'}`}>
      <List>
        <ListItem button component={Link} to="/upload-vbg"> 
          <ListItemIcon>
            <UploadFileIcon />
          </ListItemIcon>
          <ListItemText primary="Upload VBG File" />
        </ListItem>
        
        <ListItem button component="button">
          <ListItemIcon>
            <FlexbookerIcon />
          </ListItemIcon>
          <ListItemText primary="Flexbooker File" />
        </ListItem>
        <ListItem button component="button">
          <ListItemIcon>
            <ZipMasterIcon />
          </ListItemIcon>
          <ListItemText primary="Zip Master" />
        </ListItem>
        <ListItem button component="button">
          <ListItemIcon>
            <PsychStateIcon />
          </ListItemIcon>
          <ListItemText primary="Psych State" />
        </ListItem>
        <ListItem button component="button">
          <ListItemIcon>
            <DoctorScheduleIcon />
          </ListItemIcon>
          <ListItemText primary="Doctor Schedule" />
        </ListItem>
        <ListItem button component="button" onClick={handleSettingsClick}>
        <ListItemIcon >
            <SettingsIcon />
          </ListItemIcon>
         
          <ListItemText primary="Settings" />
          <ListItemIcon >
            <ArrowDropDownIcon />
          </ListItemIcon>
        </ListItem>

      </List>

      <Popover
        open={isSettingsMenuOpen}
        anchorEl={settingsAnchorEl}
        onClose={handleSettingsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className='ul-style'>
          <Typography sx={{ p: 2 }}>Clinic Master</Typography>
          <Typography sx={{ p: 2 }}>Users</Typography>
        </div>
      </Popover>


    </Drawer>
    ) : (
      <div></div>
    )}
    
    </>
    
  );
}
