import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
const FooTer = () => {
  return (
    <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1">Developed by some Fullstack Developers</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default FooTer;
