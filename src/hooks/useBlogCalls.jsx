import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlogSuccess,
  getSingleBlogSuccess,
  getCommentsSuccess,
} from "../features/blogSlice";
import { useNavigate } from "react-router-dom";

const useBlogCalls = () => {
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getBlogs = async () => {
    try {
      const { data } = await axios(`${process.env.REACT_APP_BASE_URL}blogs/`, {
        headers: { Authorization: `Token ${token}` },
      });
      console.log({ data: data.data });

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
  const postComments = async () => {
    try {
      await axios(
        `${process.env.REACT_APP_BASE_URL}comments/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { getBlogs, getSingleBlog, getComments, postComments };
};

export default useBlogCalls;
