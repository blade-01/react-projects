import { RiMovie2AiLine } from "react-icons/ri";
import { TbDeviceTvOld } from "react-icons/tb";
import { RiFilmFill } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { IoMdBookmark } from "react-icons/io";
import { NavLink } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, useRef } from "react";
import { Menu } from "primereact/menu";
import AuthModal from "../Auth/Modal";
import { useNavigate } from "react-router";
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";

export default function Sidebar() {
  const [authUser, setAuthUser] = useState(null);
  const [visible, setVisible] = useState(false);
  const auth = getAuth();
  const navigateTo = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
    });

    return () => unsubscribe();
  }, []);

  const menu = useRef(null);
  const itemRenderer = (item) => (
    <div className="p-menuitem-content" onClick={() => item.command()}>
      <a className="flex items-center p-menuitem-link cursor-pointer">
        {item.icon && <item.icon className="text-base" />}
        <span className="mx-2">{item.label}</span>
      </a>
    </div>
  );
  const items = [
    {
      label: authUser ? "Logout" : "Login",
      icon: authUser ? HiOutlineLogout : HiOutlineLogin,
      template: itemRenderer,
      command: () => {
        if (authUser) {
          auth.signOut();
          setAuthUser(null);
          navigateTo("/");
          menu.current.toggle(false);
        } else {
          setVisible(true);
        }
      }
    }
  ];
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
      <div
        className="xl:mt-auto"
        aria-controls="popup_menu_left"
        onClick={(event) => menu.current.toggle(event)}
      >
        {authUser?.photoURL ? (
          <img
            src={authUser?.photoURL}
            alt={`${authUser?.displayName}'s avatar `}
            className="w-7 h-6 rounded-full xl:w-8 xl:h-8 border border-white"
          />
        ) : (
          <img
            src="https://freesvg.org/img/abstract-user-flat-4.png"
            alt="User's avatar"
            className="w-7 h-6 rounded-full xl:w-8 xl:h-8 border border-white"
          />
        )}
      </div>
      <Menu model={items} popup ref={menu} id="popup_menu_left" />
      <AuthModal visible={visible} setVisible={setVisible} />
    </div>
  );
}
