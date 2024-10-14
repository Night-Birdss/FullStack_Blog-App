import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Button } from "@mui/material";
import useBlogCalls from "../hooks/useBlogCalls";

const Detail = () => {
  const { getBlogs } = useBlogCalls();
  const { blogs } = useSelector((state) => state.blog);
  const { id } = useParams(); // URL'den id parametresini alıyoruz
  const singleblog = blogs.find((blog) => blog._id === id);

  useEffect(() => {
    getBlogs();
  }, []);

  if (!singleblog) {
    return <Typography variant="body2">Yükleniyor...</Typography>; // Yükleme mesajı
  }

  if (singleblog._id !== id) {
    return <Typography variant="body2">Blog bulunamadı...</Typography>;
  }

  // Tarih formatlama
  const isoDate = singleblog.createdAt;
  const dateObj = new Date(isoDate);
  const formattedDate = dateObj.toLocaleDateString();
  const formattedTime = dateObj.toLocaleTimeString();

  return (
    <Card>
      <CardMedia
        component="img"
        alt="Blog görseli"
        height="140"
        image={singleblog.image}
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={singleblog.userId.username}
        subheader={`${formattedDate} ${formattedTime}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {singleblog.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {singleblog.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small">Yorum</Button>
        <Button size="small">{singleblog.countOfVisitors}</Button>
      </CardActions>
    </Card>
  );
};

export default Detail;
