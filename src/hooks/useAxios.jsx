import axios from "axios";

const useAxios = () => {
  const axiosToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosToken };
};

export default useAxios;
