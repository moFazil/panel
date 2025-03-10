import { LuBox, LuCalendar, LuUser} from "react-icons/lu";
import { MdOutlineAccessTimeFilled,MdNotifications, MdAppRegistration  } from "react-icons/md";
import { FaHands } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiBookmarklet } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const[activeLink,setActiveLink] = useState(0);
    const handleLinkClick=(index)=>{
        setActiveLink(index)
    }
  // const currentYear = new Date().getFullYear();
  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/prayertime", name: "Prayer Time", icon: MdOutlineAccessTimeFilled },
    { id: 3, path: "/notification", name: "Notification", icon: MdNotifications },
    { id: 4, path: "/event", name: "Event", icon: LuCalendar },
    { id: 5, path: "/user", name: "User", icon: LuUser },
    { id: 6, path: "/hadith", name: "Daily Hadith", icon: GiBookmarklet },
    { id: 7, path: "/user", name: "Registration", icon: MdAppRegistration },
    { id: 8, path: "/about-masjith", name: "About Masjith", icon: FcAbout },
    { id: 9, path: "/event-list", name: "Event List", icon: LuCalendar },
    { id: 10, path: "/daily-dua", name: "Daily Dua", icon: FaHands },
    { id: 11, path: "/ask-iman", name: "Ask Iman", icon: GiBookmarklet },
    { id: 12, path: "/audio-bayan", name: "Audio Bayan", icon: GiBookmarklet },
    { id: 13, path: "/jumma-live-stream", name: "Jumma Live Stream", icon: GiBookmarklet },
    { id: 14, path: "/maintenance-service", name: "Maintenance Service", icon: GiBookmarklet },
];

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen bg-white border-r pt-8 px-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
    {/* Logo */}
    <div className="mb-12">
      <h1 className="font-bold md:text-2xl text-xs">Admin</h1>
    </div>

    {/* Navigation Links */}
    <ul className="mt-6 space-y-6">
      {SIDEBAR_LINKS.map((link, index) => (
        <li
          key={index}
          className={`font-medium rounded-md py-5 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
            activeLink === index ? "bg-indigo-100 text-indigo-500" : ""
          }`}
        >
          <Link
            to={link.path}
            className="flex justify-center md:justify-start items-center md:space-x-5"
            onClick={() => handleLinkClick(index)}
          >
            <span>{link.icon()}</span>
            <span className="text-sm hidden text-gray-500 md:flex">{link.name}</span>
          </Link>
        </li>
      ))}
    </ul>

    {/* Footer */}
    <div className="w-full absolute bottom-5  right-0 py-2 cursor-pointer text-center md:text-left px-4 flex flex-wrap justify-center md:justify-start items-center">
      <p className="md:text-sm sm:text-xs pb-8 text-gray-600">
        <a
          href="https://techzurf.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Techzurf
        </a>
      </p>
    </div>
  </div>
  );
};

export default Sidebar;
