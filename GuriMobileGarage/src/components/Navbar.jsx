import React, { useContext, useState } from "react";
import { HiMiniUserCircle } from "react-icons/hi2";
import { BsCart4 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {



  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <div className="flex p-3 flex-col md:flex-row items-center justify-between h-auto md:h-12 bg-gray-800 mb-1 md:text-base  md:p-2 ">
      <div className="flex justify-between items-center w-full md:w-auto mb-2 md:mb-0">
        <Link to="/" className="flex gap-2 items-center max-xl:gap-1">
          <img
            src="\IMG_2238.JPG"
            alt="Logo"
            className=" rounded-full h-9 max-md:ml-0"
          />
          <p className="font-bold text-lg text-white max-lg:hidden max-md:block">
            Guri Mobile Garage
          </p>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white font-bold text-lg "
          >
            ☰
          </button>
        </div>
      </div>
      <div
        className={`md:flex ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex-row justify-between w-full md:w-auto mb-2 md:mb-0`}
      >
        <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-5 max-md:gap-2">
          <Link to="/" className="text-gray-400 hover:text-white">
            Home
          </Link>
          <Link to="/mobile" className="text-gray-400 hover:text-white">
            Mobile
          </Link>
          <Link to="/salephone" className="text-gray-400 hover:text-white">
            Sale phones
          </Link>
          <Link to="/assessories" className="text-gray-400 hover:text-white">
            Assessories
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-white">
            About
          </Link>
          
          <Link to="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link>
      <div className=" flex">
        <Link to="/cart" className="text-gray-400 hover:text-white">
          <FaHeart  className=" text-[2rem] mx-5" />
        </Link>
        <Link to="/cart" className="text-gray-400 hover:text-white">
          <BsCart4 className=" text-[2rem] mx-5" />
        </Link>
      </div>
        </ul>
      </div>
      <div
        className={`md:flex ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex-row justify-between gap-2 md:gap-2 `}
      >
        
        <Link
          to="/login"
          className="text-gray-400 font-bold hover:text-white hover:bg-gray-700 hover:p-2 hover:rounded-lg"
        >
          <HiMiniUserCircle className=" text-[2rem] mx-5" />
        </Link>:
       {/* <button className="text-gray-400 font-bold hover:text-white hover:bg-gray-700 hover:p-2 hover:rounded-lg"> logOut</button> */}
      </div>
    </div>
  );
}

export default Navbar;
