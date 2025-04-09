import { RiMovie2AiLine } from "react-icons/ri";
import { TbDeviceTvOld } from "react-icons/tb";
import { RiFilmFill } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdBookmark } from "react-icons/io";
import { NavLink } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const [authUser, setAuthUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
    });

    return () => unsubscribe();
  }, []);
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
        {authUser?.photoURL ? (
          <img
            src={authUser?.photoURL}
            alt="avatar"
            className="w-7 h-6 rounded-full xl:w-8 xl:h-8 border border-white"
          />
        ) : (
          <img
            src="https://freesvg.org/img/abstract-user-flat-4.png"
            alt="avatar"
            className="w-7 h-6 rounded-full xl:w-8 xl:h-8 border border-white"
          />
        )}
      </div>
    </div>
  );
}
