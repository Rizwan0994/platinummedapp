import React from 'react';
import Button from '@mui/material/Button';
import './UploadButton.css';

const UploadButton = () => {
  const handleFileUpload = () => {
    // Handle file upload logic here
  };

  return (
    <div>
      <input
        style={{ display: 'none' }}
        type="file"
        id="upload-file"
        onChange={handleFileUpload}
      />
      <label htmlFor="upload-file">
        <Button variant="contained" color="primary" component="span" className="upload-button">
          Upload a file
        </Button>
      </label>
    </div>
  );
};

export default UploadButton;
