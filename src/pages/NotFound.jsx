import React from 'react';
import { Box, Typography } from '@mui/material';


const NotFound = () => {
    console.log()
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: "secondary.main",
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
    </Box>
  )
}

export default NotFound