import React, { useEffect } from "react";
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

const Detail = () => {
  const { getSingleBlog } = useBlogCalls();
  const { singleblog } = useSelector((state) => state.blog);
  const { id } = useParams(); // URL'den id parametresini alıyoruz

  useEffect(() => {
    getSingleBlog(id);
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
        <Button size="small">Like</Button>
        <Button size="small">Yorum</Button>
        <Button size="small">Görüntülenme</Button>
      </CardActions>
    </Card>
  );
};

export default Detail;
