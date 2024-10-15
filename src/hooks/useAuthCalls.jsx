import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, registerSuccess, logoutSuccess } from "../features/authSlice";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (userData) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}auth/login`,
        userData
      );
      dispatch(loginSuccess(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    try {
      await axios(`${process.env.REACT_APP_BASE_URL}auth/logout`)
      dispatch(logoutSuccess())
      navigate("/")
    } catch (error) {
      console.log("çıkılamadı")
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

  return { login, register,logout};
};

export default useAuthCalls;
