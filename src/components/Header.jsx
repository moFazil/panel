import { useState } from "react";
import { FaSearch, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleUserIconClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white p-4 sticky h-20 top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="block sm:hidden border-2 border-black p-2 rounded-md"
        >
          <FaBarsStaggered />
        </button>

        <h1 className="text-xl text-gray-800 font-bold sm:hidden">
          Masjith <span className="text-lime-400">Admin</span>
        </h1>

        <div className="relative w-full max-w-xs hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-gray-900 border-2 rounded-md py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-white"
          />
          <FaSearch className="absolute left-3 top-3.5 text-gray-500" />
        </div>

        <div className="flex items-center space-x-8">
          <button className="relative text-gray-800 focus:outline-none hidden md:block">
            <FaEnvelope className="text-xl" />
          </button>
          <button className="relative text-gray-800 focus:outline-none hidden md:block">
            <FaBell className="text-xl" />
          </button>

          {/* User Profile */}
          <button
            onClick={handleUserIconClick}
            className=" w-10 h-10 flex items-center justify-center"
          >
            <FaUserCircle className="text-gray-800 text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
