import React from 'react';
import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import '../SignOutButton/button.css';

export default function SignOutButton({ onClick }) {
  return (
    <div className="button-container" onClick={onClick}>
      <IconButton
        size="small"
        color="inherit"
        aria-label="Sign Out"
        style={{ marginRight: '6px' }}
      >
        <ExitToAppIcon />
      </IconButton>
      Sign Out
    </div>
  );
}
