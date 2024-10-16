import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  return (
    <Box
      sx={{
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        m: "auto",
        mt: "10rem",
      }}
    >
      <CardMedia
        component="img"
        alt="image"
        height="140"
        image={userInfo.image}
      />
      <Typography>{userInfo.username}</Typography>
      <Typography>{userInfo.email}</Typography>
    </Box>
  );
};

export default Profile;
