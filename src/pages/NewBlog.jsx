import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Select, InputLabel, FormControl } from "@mui/material";

const NewBlog = () => {
  const initialState = {
    categoryId: "",
    title: "",
    content: "",
    image: "",
    isPublish: false,
  }
  const [data, setData] = useState(initialState)
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const { getCategories } = useBlogCalls();
  const categories = useSelector((state) => state.blog.categories);
  console.log(categories);
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          borderRadius: "3%",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
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
            variant="outlined"
            onChange={handleChange}
            required
          />
          <TextField
            label="Image URL"
            id="image"
            variant="outlined"
            name="image"
            onChange={handleChange}
            required
          />
          <FormControl>
            <InputLabel variant="outlined" id="brand-select-label" required >
              Category
            </InputLabel>
            <Select
              labelId="category-select-label"
              label="Category"
              id="category-select"
              name="categoryId"
              value={""}
              onChange={handleChange}
            >
              {categories?.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel variant="outlined" id="product-select-label" required >
              Status
            </InputLabel>
            <Select
              labelId="status-select-label"
              label="Status"
              id="status-select"
              name="statusId"
              onChange={handleChange}
              value={""}
            >
              <MenuItem value="Draft">Draft</MenuItem>
              <MenuItem value="Published">Published</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Content"
            id="content"
            name="content"
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
