import axios from "axios";
import { useSelector } from "react-redux";

const useBlogCalls = () => {
  const { token } = useSelector((state) => state.auth);
  const getİnfos = async () => {
    try {
      const { data } = await axios(`${process.env.REACT_APP_BASE_URL}blogs/`, {
        headers: { Authorization: `Token ${token}` },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getİnfos };
};

export default useBlogCalls;
