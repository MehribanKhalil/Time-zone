import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = ({isOpen}) => {
  return (
    <nav className={` ${isOpen ? " h-[350px]" : 'h-0'}  duration-300 md:hidden  shadow  z-40  overflow-hidden`}>
      <div className=" flex-col gap-5 flex bg-white text-lg p-10">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/Shop"}>Shop</NavLink>
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/admin"}>Admin</NavLink>
        <NavLink to={"/wishlist"}>Wishlist </NavLink>
        <NavLink to={"/basket"}>Basket</NavLink>
      </div>
    </nav>
  );
};

export default MobileNav;
