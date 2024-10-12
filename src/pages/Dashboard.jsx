import React, { useEffect } from "react";
import DashboardCard from "../components/blog/card";
import useBlogCalls from "..//hooks/useBlogCalls"



const Dashboard = () => {
  

  
const {getİnfos} = useBlogCalls()

  //?Sayfa yüklendikten sonra blogları getir
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
