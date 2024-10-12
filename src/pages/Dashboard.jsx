import React, { useEffect } from "react";
import DashboardCard from "../components/blog/card";
import axios from "axios";

const Dashboard = () => {
  const {token} = useSelector((state)=>state)
  const getİnfos = async () => {
    try {
      const { data } = await axios(`${process.env.REACT_APP_BASE_URL}/blogs/`, {
        headers: { Authorization: `Token ${token}` },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //?Sayfa yüklendikten sonra firmaları getir
  useEffect(() => {
    getİnfos();
  }, []);

  return (
    <div>
      <DashboardCard />
    </div>
  );
};

export default Dashboard;
