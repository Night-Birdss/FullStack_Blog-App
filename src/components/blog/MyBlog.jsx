import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Button, Grid } from "@mui/material";
import { useParams } from "react-router";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";
import DashboardCard from "./DashboardCard";

const MyBlog = () => {
  const { getComments, getLikes, postLike, getBlogsDraft } = useBlogCalls();
  const { blogs, likes } = useSelector((state) => state.blog);
  console.log(blogs);
  // const { id } = useParams(); // URL'den id parametresini alıyoruz
  const [showComments, setShowComments] = useState(false);

  const userId = useSelector((state) => state.auth.id);
  console.log(userId);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const draftBlogs = blogs.filter((blog) => blog.isPublish === false);

  useEffect(() => {
    getBlogsDraft(userId);
    // getComments();
    // getLikes(id);
  }, [userId]);

  if (!blogs) {
    return <Typography variant="body2">Yükleniyor...</Typography>; // Yükleme mesajı
  }

  // if (singleblog._id !== id) {
  //   return <Typography variant="body2">Blog bulunamadı...</Typography>;
  // }

  return (
    <div>
      <Grid container justifyContent={"center"} gap={2}>
        {draftBlogs?.map((blog, index) => (
          <Grid item key={index}>
            <DashboardCard key={index} blog={blog} />
          </Grid>
        ))}
      </Grid>
    </div>
    // <>
    //   {draftBlogs.map((blog) => (
    //     <Card sx={{ maxWidth: "1000px", m: "auto" }}>
    //       <CardMedia
    //         component="img"
    //         alt="Blog görseli"
    //         height="140"
    //         image={blog.image}
    //       />
    //       <CardHeader
    //         avatar={
    //           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    //             R
    //           </Avatar>
    //         }
    //         title={blog.userId}
    //         subheader={`${formattedDate} ${formattedTime}`}
    //       />
    //       <CardContent>
    //         <Typography gutterBottom variant="h5" component="div">
    //           {blog.title}
    //         </Typography>
    //         <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //           {blog.content}
    //         </Typography>
    //       </CardContent>
    //       <CardActions>
    //         <Button size="small">
    //           <FavoriteIcon />
    //         </Button>
    //         <Button size="small" onClick={toggleComments}>
    //           {showComments ? <CommentIcon /> : <CommentIcon />}
    //         </Button>
    //         <Button size="small">
    //           <RemoveRedEyeIcon />
    //           {blog.countOfVisitors}
    //         </Button>
    //       </CardActions>
    //       {showComments && (
    //         <>
    //           {/* <CommentForm blogId={id} /> */}
    //           {blog.comments?.map((comment) => (
    //             <CommentCard key={comment._id} comment={comment} />
    //           ))}
    //         </>
    //       )}
    //     </Card>
    //   ))}
    // </>
  );
};

export default MyBlog;
