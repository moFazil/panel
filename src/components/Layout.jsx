import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`w-full layout transition-all duration-300 ${isSidebarOpen ? "sm:ml-56" : "sm:ml-0"}`}>
        <div className="sm:ml-56 ml-0">
        <Header toggleSidebar={toggleSidebar} />
        </div>
        <div className="sm:ml-56 ml-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
