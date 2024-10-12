import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Box } from "@mui/material";

export default function DashboardCard(Dashboard) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Porsche"
        height="140"
        image={Dashboard.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Dashboard.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {Dashboard.content}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary",}}>
        Published Date : {Dashboard.isPublis}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <FavoriteIcon />
          <ChatBubbleOutlineIcon />
          <RemoveRedEyeIcon/>
        </Box>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}
