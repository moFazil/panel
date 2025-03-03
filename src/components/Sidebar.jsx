import { LuBox, LuCalendar, LuUser} from "react-icons/lu";
import { FaSuitcase } from "react-icons/fa";
import { MdOutlineAccessTimeFilled,MdNotifications } from "react-icons/md";
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
    { id: 6, path: "/hadith", name: "Hadith Form", icon: FaSuitcase },
  ];
  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white">
      {/* logo */}
      <div className="mb-12">
        <h1 className="font-bold md:text-2xl text-xs ">Admin</h1>
      </div>

      {/* navigation links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
            key={index}
            className={`font-medium rounded-md py-5 px-5 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-100 text-indigo-500":""}`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={()=>handleLinkClick(index)}
            >
              <span>{link.icon()}</span>
              <span className="text-sm hidden text-gray-500 md:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* navigation links */}
      <div className="w-full absolute bottom-5 right-0 py-2 cursor-pointer text-center md:text-left px-4 flex flex-wrap justify-center md:justify-start items-center">
        <p className="md:text-sm sm:text-xs text-gray-600">
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
