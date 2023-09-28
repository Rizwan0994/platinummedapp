import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ placeholder, onSearch }) {
  const handleSearch = (event) => {
    const searchText = event.target.value;
    onSearch(searchText);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center',  marginTop:'100px'}}>
      <TextField
        label={placeholder || 'Search'}
        variant="outlined"
        size="large"
        fullWidth
        onChange={handleSearch}
        InputProps={{
          endAdornment: (
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;
