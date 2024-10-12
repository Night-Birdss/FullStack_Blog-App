import { Avatar, Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        alignItems="center"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "green",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <PersonIcon />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="primary">
            Login
          </Typography>
          {/* LOGİN FORM */}
          <LoginForm />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
