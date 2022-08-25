import { Outlet } from "@tanstack/react-location";
import Sidebar from "./components/sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
