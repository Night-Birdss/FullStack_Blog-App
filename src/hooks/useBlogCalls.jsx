import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getBlogSuccess } from "../features/blogSlice";

const useBlogCalls = () => {
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

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

  // const getLikes = async (id) => {
  //   try {
  //     const { data } = await axios(
  //       `${process.env.REACT_APP_BASE_URL}blogs/${id}/getLike`,
  //       {
  //         headers: { Authorization: `Token ${token}` },
  //       }
  //     );
  //     dispatch(getSingleBlogSuccess({ data: data.data }));
  //     navigate(`/detail/${id}`);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return { getBlogs };
};

export default useBlogCalls;
