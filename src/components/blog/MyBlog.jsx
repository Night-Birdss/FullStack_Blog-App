import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";
import DashboardCard from "./DashboardCard";

const MyBlog = () => {
  const { getBlogsDraft } = useBlogCalls();
  const { blogs } = useSelector((state) => state.blog);

  const userId = useSelector((state) => state.auth.id);

  const draftBlogs = blogs.filter((blog) => blog.isPublish === false);

  useEffect(() => {
    getBlogsDraft(userId);
  }, [userId]);

  if (!blogs) {
    return <Typography variant="body2">Yükleniyor...</Typography>; // Yükleme mesajı
  }

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
  );
};

export default MyBlog;
