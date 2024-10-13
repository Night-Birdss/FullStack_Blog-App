import React, { useEffect, useState } from "react";

import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";

const NewBlog = () => {
  const { getCategories, postBlog } = useBlogCalls();

  const initialState = {
    categoryId: "",
    title: "",
    content: "",
    image: "",
    isPublish: true,
  };
  const [data, setData] = useState(initialState);
  const categories = useSelector((state) => state.blog.categories);
  // console.log(categories);
  useEffect(() => {
    getCategories()
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        postBlog(data);
  };

  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          borderRadius: "3%",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 280, md: 400 }, // Adjusts width for smaller and larger screens
          backgroundColor: "background.paper",
          border: "0 solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>New Blog</h2>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          component="form"
          onSubmit={handleSubmit}
        >
          <TextField
            label="Title"
            id="title"
            name="title"
            value={data?.title}
            variant="outlined"
            onChange={handleChange}
            required
          />
          <TextField
            label="Image URL"
            id="image"
            variant="outlined"
            name="image"
            value={data?.image}
            onChange={handleChange}
            required
          />
          <FormControl>
            <InputLabel variant="outlined" id="category-select-label" required>
              Category
            </InputLabel>
            <Select
              labelId="category-select-label"
              label="Category"
              id="category-select-label"
              name="categoryId"
              value={data?.categoryId}
              onChange={handleChange}
            >
              <MenuItem>Please choose...</MenuItem>
              {categories?.map((category) => (
                <MenuItem key={category._id} value={category._id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel variant="outlined" id="product-select-label" required>
              Status
            </InputLabel>
            <Select
              labelId="status-select-label"
              label="Status"
              id="status-select"
              name="isPublish"
              onChange={handleChange}
              // value={data.isPublish ? "Published" : "Draft"}
            >
              <MenuItem selected>Please choose...</MenuItem>
              <MenuItem value={false}> Draft</MenuItem>
              <MenuItem value={true}>Published</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Content"
            id="content"
            name="content"
            value={data?.content}
            variant="outlined"
            onChange={handleChange}
            required
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" size="large">
            NEW BLOG
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default NewBlog;
