import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

import { useParams } from "react-router";
import useBlogCalls from "../hooks/useBlogCalls";
import CommentCard from "../components/blog/CommentCard";

const Detail = () => {
  const { getSingleBlog, getComments } = useBlogCalls();
  const { singleblog, comments } = useSelector((state) => state.blog);
  const { id } = useParams(); // URL'den id parametresini alıyoruz
  const [showComments, setShowComments] = useState(false);
  console.log(comments);
  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  useEffect(() => {
    getSingleBlog(id);
    getComments();
  }, [id]);

  //!Düzenlenecek
  if (!singleblog || !singleblog.userId) {
    return <Typography variant="body2">Blog bulunamadı...</Typography>;
  }

  //!Tarih UI düzenlemeleri
  const isoDate = singleblog.createdAt;
  const dateObj = new Date(isoDate);
  const formattedDate = dateObj.toLocaleDateString(); // Tarih: 17/10/2024
  const formattedTime = dateObj.toLocaleTimeString();

  return (
    <Card>
      <CardMedia
        component="img"
        a
        alt="green iguana"
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
        <Button size="small">Like{singleblog.likes.length}</Button>
        <Button size="small" onClick={toggleComments}>
          {showComments ? "Yorumları Gizle" : "Yorumları Göster"}
          {singleblog.comments.length}
        </Button>
        <Button size="small">Görüntülenme{singleblog.countOfVisitors}</Button>
      </CardActions>
      {showComments && comments?.map((comment)=>(<CommentCard comment={comment}/>))}
    </Card>
  );
};

export default Detail;
