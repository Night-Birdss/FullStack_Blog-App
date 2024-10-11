import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Porsche"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Porsche
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Once known just for its sports cars, Porsche now produces a wide
          variety of coupes, convertibles, SUVs and sedans.
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Published Date : 24.01.2024 20:39:42
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <FavoriteIcon />
          <ChatBubbleOutlineIcon />
          <RemoveRedEyeIcon />
        </Box>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};

export default Dashboard;
