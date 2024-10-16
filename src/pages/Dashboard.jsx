import React, { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import DashboardCard from "../components/blog/DashboardCard";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Dashboard = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { getBlogs } = useBlogCalls();

  // Sayfa ve blog başına gösterilecek sayıyı ayarlamak için state tanımlamaları
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10; // Sayfa başına gösterilecek blog sayısı

  useEffect(() => {
    getBlogs();
  }, []);

  // Blogları sayfalara bölmek için gereken indeks hesaplamaları
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs?.slice(indexOfFirstBlog, indexOfLastBlog);

  // Sayfa değiştirme fonksiyonu
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Toplam sayfa sayısı hesaplama
  const totalPages = Math.ceil(blogs?.length / blogsPerPage);

  return (
    <div>
      <Grid container justifyContent={"center"} gap={2}>
        {currentBlogs?.map((blog, index) => (
          <Grid item key={index}>
            <DashboardCard key={index} blog={blog} />
          </Grid>
        ))}
      </Grid>

      {/* Eğer bloglar yüklendiyse ve sayfa sayısı 1'den fazlaysa pagination göster */}
      {totalPages > 1 && (
        <Stack
          spacing={2}
          justifyContent="center"
          alignItems="center"
          marginTop={2}
        >
          <Pagination
            count={totalPages} // Toplam sayfa sayısı
            page={currentPage}
            onChange={handlePageChange}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      )}
    </div>
  );
};

export default Dashboard;
