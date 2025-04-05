import { LuBox, LuCalendar, LuUser } from "react-icons/lu";
import { MdOutlineAccessTimeFilled, MdNotifications, MdOutlineRoundaboutRight, MdAppRegistration, MdOutlineSpatialAudio, MdLiveTv } from "react-icons/md";
import { FaHands } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { CiSquareQuestion } from "react-icons/ci";
import { GiBookmarklet } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/prayertime", name: "Prayer Time", icon: MdOutlineAccessTimeFilled },
    { id: 3, path: "/notification", name: "Notification", icon: MdNotifications },
    { id: 7, path: "/registrationlist", name: "Registration List", icon: MdAppRegistration },
    // { id: 4, path: "/event", name: "Event List", icon: LuCalendar },
    // { id: 6, path: "/hadith", name: "Daily Hadith", icon: GiBookmarklet },
    // { id: 8, path: "/about-masjith", name: "About Masjith", icon: MdOutlineRoundaboutRight },
    // { id: 10, path: "/daily-dua", name: "Daily Dua", icon: FaHands },
    // { id: 11, path: "/ask-iman", name: "Ask Iman", icon: CiSquareQuestion },
    // { id: 12, path: "/audio-bayan", name: "Audio Bayan", icon: MdOutlineSpatialAudio },
    // { id: 13, path: "/jumma-live-stream", name: "Jumma Live Stream", icon: MdLiveTv },
    // { id: 14, path: "/maintenance-service", name: "Maintenance Service", icon: GrServices },
  ];

  return (
    <>
      <div
        className={`fixed left-0 top-0 mt-5 shadow-xl px-2 py-13 sm:mt-0 sm:py-0 z-50 h-full bg-white   transition-transform duration-300 ease-in-out overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ${
          isOpen ? "translate-x-0 w-56" : "-translate-x-full sm:translate-x-0 sm:w-56"
        }`}
      >
        <div className="mb-5  flex px-5 gap-2 sm:pt-5">
          <h1 className="font-bold sm:block hidden md:text-2xl  text-sm text-lime-400">Masjith</h1>
          <h1 className="font-bold sm:block hidden md:text-2xl text-sm">Admin</h1>
        </div>

        <ul className="sm:mt-6  sm:space-y-6 space-y-3">
          {SIDEBAR_LINKS.map((link, index) => (
            <li
              key={index}s
              className={`font-medium rounded-md py-3 px-8 hover:bg-black hover:text-white ${
                activeLink === index ? "bg-black text-white" : ""
              }`}
            >
              <Link
                to={link.path}
                className="flex justify-start  items-center space-x-5"
                onClick={() => handleLinkClick(index)}
              >
                <span>{link.icon()}</span>
                <span className="text-sm sm:text-base  md:flex">{link.name}</span>
              </Link>
            </li>
          ))}
          <li className="flex justify-center  pb-10">
            <a
              href="https://techzurf.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border p-2 px-4 rounded-md hover:bg-white hover:text-black bg-black hover:underline"
            >
              Techzurf
            </a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-10 sm:hidden z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
