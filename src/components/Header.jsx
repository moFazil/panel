import { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaUserCircle,
  FaEllipsisV,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header=()=> {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ setUserImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserImage(imageUrl);
    }
  };

  // Function to trigger file selection when user clicks the user icon
  const handleUserIconClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 p-4  w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* <button className="text-white text-2xl rounded-md focus:outline-none border-2 border-white p-1">
            <FaBars />
          </button> */}
          <h1 className=" text-2xl text-white text-nowrap font-semibold hidden sm:block">
            Masjith <span className="text-lime-400">Admin</span>
          </h1>
          
        </div>
        <div className="relative w-full  max-w-xs hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-gray-900 rounded-md py-2 px-4 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>
        <div className="flex items-center space-x-8">
          <button className="relative hidden sm:hidden md:block text-white focus:outline-none">
            <FaEnvelope className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              4
            </span>
          </button>
          <button className="relative hidden sm:hidden md:block text-white focus:outline-none">
            <FaBell className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              17
            </span>
          </button>

          {/* Hidden File Input */}
          <input
            type="button"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          {/* User Profile Button */}
          <div className="relative">
      {/* User Icon Button */}
      <button
        onClick={handleUserIconClick}
        className="border-2 border-white rounded-full focus:outline-none w-10 h-10 flex items-center justify-center overflow-hidden"
      >
          <FaUserCircle className="text-white text-2xl" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
          <ul className="py-2">
            <Link to={`login`}>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Login
            </li>
            </Link>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-xl sm:hidden focus:outline-none"
          >
            <FaEllipsisV />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-green-900 rounded-md p-2 mt-2">
          <button className="flex items-center text-white w-full py-2">
            <FaEnvelope className="mr-2" /> Messages (4)
          </button>
          <button className="flex items-center text-white w-full py-2">
            <FaBell className="mr-2" /> Notifications (17)
          </button>
          <button
            className="flex items-center text-white w-full py-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
              <FaUserCircle className="mr-2" />
            Profile
          </button>
        </div>
      )}

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-4 bg-white shadow-md rounded-md mt-2 py-2 w-40">
          <button className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left">
            Profile
          </button>
          <button className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left">
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header