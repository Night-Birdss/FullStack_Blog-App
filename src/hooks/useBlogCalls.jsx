import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlogSuccess,
  getSingleBlogSuccess,
  getCommentsSuccess,
  getLikesSuccess,
} from "../features/blogSlice";

const useBlogCalls = () => {
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const getBlogs = async () => {
    try {
      const { data } = await axios(`${process.env.REACT_APP_BASE_URL}blogs/`, {
        headers: { Authorization: `Token ${token}` },
      });

      dispatch(getBlogSuccess({ data: data.data }));
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleBlog = async (id) => {
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_BASE_URL}blogs/${id}`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getSingleBlogSuccess({ data: data.data }));
    } catch (error) {
      console.log(error);
    }
  };

  //!COMMENT
  const getComments = async () => {
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_BASE_URL}comments/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getCommentsSuccess({ data: data.data }));
    } catch (error) {
      console.log(error);
    }
  };
  const postComments = async (id, value) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}comments/`,
        {
          blogId: id,
          comment: value,
        },
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      getSingleBlog(id);
    } catch (error) {
      console.log(error);
    }
  };

  //!LİKE
  const getLikes = async (id) => {
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_BASE_URL}blogs/${id}/getLike`,

        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getLikesSuccess({ data: data }));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postLike = async (id) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}blogs/${id}/postLike`,
        {},
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      getLikes(id);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getBlogs,
    getSingleBlog,
    getComments,
    postComments,
    getLikes,
    postLike,
  };
};

export default useBlogCalls;
