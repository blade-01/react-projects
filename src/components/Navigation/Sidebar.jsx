import { RiMovie2AiLine } from "react-icons/ri";
import { TbDeviceTvOld } from "react-icons/tb";
import { RiFilmFill } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdBookmark } from "react-icons/io";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <div className="bg-sidebar-bg text-sidebar-text sticky z-10 md:fixed md:left-5 md:top-10 md:h-[95vh]  md:w-22 top-0 p-4 flex justify-between items-center md:flex-col md:justify-start md:rounded-[20px] md:py-6">
      <NavLink to="/">
        <RiMovie2AiLine className="text-[32px] md:text-[40px] text-caret" />
      </NavLink>
      <div className="flex justify-center items-center gap-5 md:flex-col w-full md:mt-14">
        <NavLink to="/">
          <BiSolidDashboard size={24} />
        </NavLink>
        <NavLink to="/movies">
          <RiFilmFill size={24} />
        </NavLink>
        <NavLink to="/series">
          <TbDeviceTvOld size={24} />
        </NavLink>
        <NavLink to="/bookmarks">
          <IoMdBookmark size={24} />
        </NavLink>
      </div>
      <div className="md:mt-auto">
        <img
          src="https://avatars.githubusercontent.com/u/47092407?v=4"
          alt="avatar"
          className="w-7 h-6 rounded-full md:w-8 md:h-8 border border-white"
        />
      </div>
    </div>
  );
}
