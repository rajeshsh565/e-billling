import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const DashboardLayout = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <div style={{ height: "85vh" }}>
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
