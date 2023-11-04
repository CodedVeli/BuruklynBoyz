/* eslint-disable react/prop-types */
import  { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../assets/logo.jpg'
import { Link } from "react-router-dom";

const NavBar = ( {count}) => {
  const [nav, setNav] = useState(false);  

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{  backgroundColor: "black" }}
      className="fixed z-50 left-0 top-0 w-full montserrat  ease-in duration-300  "
    >
      <div className="md:w-[90%] w-[80%] m-auto flex flex-row-reverse justify-between lg:pr-20 items-center text-white">
      
        <div className=" relative"><span className=" absolute top-0 right-0 -mt-2 -mr-2">{count}</span><AiOutlineShoppingCart className=" text-3xl" /></div>     
        <Link
          to="/"
          style={{ color: "white" }}
          className="font-bold text-4xl "
        >
          <img src={logo} alt="logo" className="w-[130px] h-[130px]  " />
        </Link>

        <ul style={{ color: "white" }} className="hidden  sm:flex ">
        <Link
  to="/"
  className="p-4 text-2xl font-bold transition-colors hover:text-blue-500 hover:scale-105 transf ease-in-out duration-500 transform hover:underline hover:font-medium hover:text-xl"
>
  Home
</Link>


          <Link
           to="/merch"
            className="p-4  text-2xl font-bold transition-colors hover:text-blue-500 hover:scale-105 transf ease-in-out duration-500 transform hover:underline hover:font-medium hover:text-xl"
          >
            Merch
          </Link>
          <Link
            to="/events"
            className="p-4  text-2xl font-bold transition-colors hover:text-blue-500 hover:scale-105 transf ease-in-out duration-500 transform hover:underline hover:font-medium hover:text-xl"
          >
            Events
          </Link>

          

          <Link
            to="/booking"
            className="p-4  text-2xl font-bold transition-colors hover:text-blue-500 hover:scale-105 transf ease-in-out duration-500 transform hover:underline hover:font-medium hover:text-xl"
          >
            Booking
          </Link>
        </ul>

        {/*Mobile button /> */}
        <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: "white" }}
            />
          ) : (
            <AiOutlineMenu
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: "white" }}
            />
          )}
        </div>
        {/*Mobile menu /> */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-[#000000]  text-white duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-[#000000]  text-white duration-300 ease-in-out"
          }
        >
          <ul onClick={toggleNav}>
            <div className="flex flex-col justify-center items-center gap-4">
              <Link
                to="/"
                className="p-4 hover:scale-105 transition-all ease-in-out duration-500 "
              >
                Home
              </Link>

              <Link
                to="/merch"
                className="p-4 hover:scale-105 transition-all ease-in-out duration-500 "
              >
                Merch
              </Link>

              <Link
                to="/events"
                className="p-4 hover:scale-105 transition-all ease-in-out duration-500 "
              >
                Events
              </Link>


              <Link
                to="/booking"
                className="p-4 hover:scale-105 transition-all ease-in-out duration-500 "
              >
                Booking
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;