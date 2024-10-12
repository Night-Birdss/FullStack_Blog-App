import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
  categories: [],
  status:[],
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
    getCategorySuccess: (state, { payload }) => {
        // console.log(payload)
      state.categories = payload.category
    },
    getStatusSuccess: (state, { payload }) => {
      state.status = payload.isPublish
    },
  },
})

export const {
    getCategorySuccess,
    getStatusSuccess,
  } = blogSlice.actions
  
  export default blogSlice.reducer
  