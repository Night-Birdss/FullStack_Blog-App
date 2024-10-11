import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Select, InputLabel, FormControl } from "@mui/material";

const NewBlog = () => {
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
        >
          <TextField
            label="Title"
            id="title"
            name="title"
            variant="outlined"
            required
          />
          <TextField
            label="Image URL"
            id="image"
            variant="outlined"
            name="image"
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
            ></Select>
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
              required
            ></Select>
          </FormControl>
          <TextField
            label="Content"
            id="content"
            name="content"
            variant="outlined"
            required
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
