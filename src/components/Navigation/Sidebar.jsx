import { RiMovie2AiLine } from "react-icons/ri";
import { TbDeviceTvOld } from "react-icons/tb";
import { RiFilmFill } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdBookmark } from "react-icons/io";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <div className="bg-sidebar-bg text-sidebar-text sticky z-10 xl:fixed xl:left-5 xl:top-1/2 xl:-translate-y-1/2 xl:h-[94dvh]  xl:w-22 top-0 p-4 flex justify-between items-center xl:flex-col xl:justify-start xl:rounded-[20px] xl:py-6">
      <NavLink to="/">
        <RiMovie2AiLine className="text-[32px] xl:text-[40px] text-caret" />
      </NavLink>
      <div className="flex justify-center items-center gap-5 xl:gap-9 xl:flex-col w-full xl:mt-14">
        <NavLink to="/">
          <BiSolidDashboard size={24} />
        </NavLink>
        <NavLink to="/movie?page=1">
          <RiFilmFill size={24} />
        </NavLink>
        <NavLink to="/tv?page=1">
          <TbDeviceTvOld size={24} />
        </NavLink>
        <NavLink to="/bookmarks">
          <IoMdBookmark size={24} />
        </NavLink>
      </div>
      <div className="xl:mt-auto">
        <img
          src="https://avatars.githubusercontent.com/u/47092407?v=4"
          alt="avatar"
          className="w-7 h-6 rounded-full xl:w-8 xl:h-8 border border-white"
        />
      </div>
    </div>
  );
}
