import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contextApi/appContext';

const PageNotFound = () => {
  const [auth , setAuth] = useAuth();
  return (
    <>
   {auth.user? (
    <Container
      maxWidth="md"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        sx={{
          backgroundColor: 'white',
          border: '1px solid #e0e0e0',
          p: 4,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '6rem', color: 'gray.300', fontWeight: 'bold', letterSpacing: 'wide' }}>
          404
        </Typography>
        <Typography variant="h2" sx={{ fontSize: '2rem', color: 'gray.500', fontWeight: 'bold', letterSpacing: 'wide', mt: 4 }}>
          Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ color: 'gray.500', mt: 4, pb: 2, borderBottom: '2px solid #e0e0e0', textAlign: 'center' }}>
          Sorry, the page you are looking for could not be found.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            backgroundColor: 'blue.600',
            '&:hover': {
              backgroundColor: 'blue.700',
            },
            color: 'white',
            px: 4,
            py: 2,
            mt: 4,
            borderRadius: 1,
            transition: 'background-color 0.3s',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" sx={{ width: 5, height: 5, mr: 2 }} viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Return Back
        </Button>
      </div>
    </Container>
   ):(
    <Container
    maxWidth="md"
    sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      sx={{
        backgroundColor: 'white',
        border: '1px solid #e0e0e0',
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '6rem', color: 'gray.300', fontWeight: 'bold', letterSpacing: 'wide' }}>
        404
      </Typography>
      <Typography variant="h2" sx={{ fontSize: '2rem', color: 'gray.500', fontWeight: 'bold', letterSpacing: 'wide', mt: 4 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ color: 'gray.500', mt: 4, pb: 2, borderBottom: '2px solid #e0e0e0', textAlign: 'center' }}>
        Sorry, the page you are looking for could not be found.
      </Typography>
      <Button
        component={Link}
        to="/login"
        variant="contained"
        sx={{
          backgroundColor: 'blue.600',
          '&:hover': {
            backgroundColor: 'blue.700',
          },
          color: 'white',
          px: 4,
          py: 2,
          mt: 6,
          borderRadius: 1,
          transition: 'background-color 0.3s',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" sx={{ width: 5, height: 5, mr: 2 }} viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Return Home
      </Button>
    </div>
  </Container>
    )}
    </>
  );
};

export default PageNotFound;
