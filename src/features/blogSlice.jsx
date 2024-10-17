import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    categories: [],
    status: [],
    blogs: [],
    singleblog: [],
    comments: [],
    likes: [],
    loading: false,
    error: false,
  },
  //   {
  //     "categoryId": "65343222b67e9681f937f101",
  //     "title": "Blog Title 1",
  //     "content": "Blog Content 1",
  //     "image": "http://imageURL",
  //     "isPublish": true
  //   }
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    getCategorySuccess: (state, { payload }) => {
      state.loading = false;
      state.categories = payload.data;
    },
    getStatusSuccess: (state, { payload }) => {
      state.loading = false;
      state.status = payload.isPublish;
    },
    getBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.blogs = payload.data;
    },
    getSingleBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.singleblog = payload.data;
    },
    getCommentsSuccess: (state, { payload }) => {
      state.loading = false;
      state.comments = payload.data;
    },
    getLikesSuccess: (state, { payload }) => {
      state.loading = false;
      state.likes = payload.data;
    },
  },
});
export const {
  getCategorySuccess,
  getStatusSuccess,
  getBlogSuccess,
  getSingleBlogSuccess,
  getCommentsSuccess,
  getLikesSuccess,
  fetchStart,
  fetchFail,
} = blogSlice.actions;
export default blogSlice.reducer;
