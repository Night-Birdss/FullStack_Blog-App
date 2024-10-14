import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, registerSuccess } from "../features/authSlice";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (userData) => {
    console.log(userData);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}auth/login`,
        userData
      );
      console.log(data);
      dispatch(loginSuccess(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const register = async (userInfo) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}users/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { login, register };
};

export default useAuthCalls;
