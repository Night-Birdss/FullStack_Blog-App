import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import {
  getCategorySuccess,
  getBlogSuccess,
  getSingleBlogSuccess,
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
        dispatch(getBlogSuccess({ data: data.data }));
    } catch (error) {
      console.log(error);
    }
  };
  const getCategories = async () => {
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_BASE_URL}categories/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      dispatch(getCategorySuccess({ data: data.data }));
    } catch (error) {
      console.log(error);
    }
  };
  const postBlog = async (data) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}blogs/`,
        data,
        {headers: { Authorization: `Token ${token}` },})
      toastSuccessNotify(`Veri ekleme başarılı.`)
      navigate("/")
      getBlogs()
      }
    catch (error) {
      toastErrorNotify("Ekleme işlemi başarısız oldu.")
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
      navigate("/detail");
      dispatch(getSingleBlogSuccess({ data: data.data }));
    } catch (error) {
      console.log(error);
    }
  };

  return { getCategories, getBlogs, getSingleBlog, postBlog };
};

export default useBlogCalls;
