import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";
import { WishlistContext } from "../../context/WishlistContext";
import { BasketContext } from "../../context/BasketContext";
import MobileNav from "../../components/NavbarComponents/MobileNav";
import './index.scss'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const { wishlist} = useContext(WishlistContext);
  const {basket } = useContext(BasketContext);
  return (
    <nav className="fixed z-50 w-full">
      <div className={`navbar    bg-white shadow  flex justify-between items-center px-5 md:px-16  lg:px-32 py-8 `}>
        <div>
          <NavLink to={"/"}>
            <img
              src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png"
              alt=""
            />
          </NavLink>
        </div>

        <div className=" hidden   md:flex gap-10 text-lg">
          <NavLink className='nav-item' to={"/"}>Home</NavLink>
          <NavLink className='nav-item' to={"/Shop"}>Shop</NavLink>
          <NavLink className='nav-item' to={"/About"}>About</NavLink>
          <NavLink className='nav-item' to={"/admin"}>Admin</NavLink>
        </div>

        <div className=" flex  items-center">
         <div className="hidden md:flex  gap-7 text-xl">
         <NavLink className='nav-item' to={"/wishlist"}>
            <button className=" relative"><i className="fa-regular fa-heart"></i>
            
            <span className=" absolute w-4 h-4 flex justify-center items-center bg-red-600 rounded-full text-sm text-white  -top-2 -right-2">{wishlist.length}</span></button>
          </NavLink>
          <NavLink className='nav-item' to={"/basket"}>
            <button className=" relative">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className=" absolute w-4 h-4 flex justify-center items-center bg-red-600 rounded-full text-sm text-white  -top-2 -right-2">{basket.length}</span>
            </button>
          </NavLink>
         </div>

         
        </div>
        <div className=" md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={22} />
        </div>


       
      </div>

      <MobileNav isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
