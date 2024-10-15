import React, { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import DashboardCard from "../components/blog/DashboardCard";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
const Dashboard = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { getBlogs } = useBlogCalls();

  //?Sayfa yüklendikten sonra blogları getir
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <Grid container justifyContent={"center"} gap={2} >
        {blogs?.map((blog, index) => (
          <Grid item key={index}>
            <DashboardCard key={index} blog={blog} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
