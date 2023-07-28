import React, { useState, useEffect,  } from "react";
import "../plugin/css/Navbar.css";

const Navbar = () => {
  const [openNav, SetOpenNav] = useState(false);
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {

  // }, [lastScrollY]);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     setLastScrollY(currentScrollY);

  //     if (!isNavbarVisible) {
  //       setIsNavbarVisible(true);
  //     }
  //     const hideNavbarTimeout = setTimeout(() => {
  //       setIsNavbarVisible(false);
  //     }, 10000);
  //     return () => clearTimeout(hideNavbarTimeout);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [isNavbarVisible]);
  // const navBarStyle = {
  //   opacity: isNavbarVisible ? '1' : '0',
  //   transition: 'opacity 0.7s',
  // };

  const toggleNavbar = () => {
    SetOpenNav(!openNav);
  };

  useEffect(() => {
    if (openNav == true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openNav]);
  return (
    <nav
      // style={navBarStyle}
      className={`flex items-center justify-between px-10 py-10 text-xl sm:text-3xl md:text-3xl lg:text-3xl z-20  ${
        openNav ? "fixed top-0 py-10  w-full" : "fixed top-0 w-full py-10"}`}>
      <div
        className={`w-[50%] uppercase font-bold ${
          openNav ? "fixed top-5 left-10 " : "fixed top-5 left-10 "}`}>
        trajuszt
      </div>
      <div
        className={`flex items-center navbar-text gap-10 cursor-pointer ${
          openNav
            ? "bg-white h-screen fixed top-0 right-0 open"
            : "bg-white h-screen fixed top-0 right-0"}`}>
        <div onClick={toggleNavbar}>
          {openNav ? (
            <div className="fixed top-5 right-14 z-10 ">
              <i class="fa-solid fa-xmark"></i>
            </div>
          ) : (
            <div className=" flex items-center gap-10 cursor-pointer fixed top-6 right-10 z-10">
              <i class="fa-regular fa-moon"></i>
              <i class="fa-solid fa-bars"></i>
            </div>
          )}
        </div>
        <div
          className={`navbar-text${openNav? "absolute top-0 right-0  flex items-center" : "absolute top-0 right-0  flex items-center"}`}>
          <img
            src={require("../plugin/img/garis-nav.png")}
            alt=""
            className="h-[90vh]"/>
          <ul className=" uppercase text-2xl leading-[3rem] font-bold ">
            <li className="hover:text-hijau"><a href="#home">Home</a></li>
            <li className="hover:text-hijau"><a href="#skils">Skils</a></li>
            <li className="hover:text-hijau"><a href="">Works</a></li>
            <li className="hover:text-hijau"><a href="">Resume</a></li>
            <li className="hover:text-hijau"><a href="#Blog">Blog</a></li>
            <li className="hover:text-hijau"><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
