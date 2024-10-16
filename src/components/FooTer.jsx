import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
const FooTer = () => {
  return (
    <AppBar 
    // position="fixed"
     sx={{ top: "auto", bottom: 0,}}
     >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1" sx={{ }}>
          Developed by some Fullstack Developers
        </Typography>
        
        <Typography variant="body1" sx={{ display: "block" }}>
          Copyright &copy; {new Date().getFullYear()} nightBirds.co
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default FooTer;
