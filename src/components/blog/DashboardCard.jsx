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
import useBlogCalls from "../../hooks/useBlogCalls";
import { useNavigate } from "react-router";

export default function DashboardCard({ blog }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Porsche"
        height="140"
        image={blog.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {blog.content}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Published Date : {blog.isPublish}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <FavoriteIcon />
          {blog.likes.length}
          <ChatBubbleOutlineIcon />
          <RemoveRedEyeIcon />
        </Box>
        <Button size="small" onClick={() => navigate(`detail/${blog._id}`)}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
