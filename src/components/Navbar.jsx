import React, { useState, useEffect } from "react";
// import "../plugin/css/Navbar.css";

const Navbar = ({
  darkMode,
  toogleDarkMode,
  scrollToHome,
  scrollToSkills,
  scrollToBlog,
  scrollToContact,
  isModalOpen
}) => {
  const [openNav, SetOpenNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNavbar, setScrollNavbar] = useState(false);

  const toggleNavbar = () => {
    SetOpenNav(!openNav);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const tutup = () => {
    SetOpenNav(false);
    setIsOpen(false);
  };
  const handleSliderClick = (e) => {
    // Menghentikan event dari merambat ke elemen di atasnya
    e.stopPropagation();
  };

  useEffect(() => {
    if (openNav === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openNav]);

  useEffect(() => {
    var navigasi = document.getElementById("nav");
    if (openNav === true) {
      navigasi.classList.add("w-full");
      navigasi.classList.add("h-full");
    } else {
      navigasi.classList.remove("w-full");
      navigasi.classList.remove("h-full");
    }
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollNavbar(true);
      } else {
        setScrollNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between fixed top-0 left-0 w-full px-10 lg:py-10 md:py-10 text-xl sm:text-3xl md:text-3xl lg:text-3xl z-20${
        openNav ? "" : ""
      } ${scrollNavbar && darkMode ? "bg-black text-white" : "" || scrollNavbar ? "bg-white" : ""}`}
    >
      <div
        className={`uppercase font-bold fixed top-5 left-10 hidden lg:block md:block  cursor-pointer hover:animate-bounce
        ${openNav && darkMode ? "text-white" : "text-black"} 
        ${darkMode ? "text-white" : ""}`}
        onClick={(e) => {
          tutup(e);
          // scrollToHome(e);
        }}
        id="nav"
      >
        trajuszt
      </div>
      <div className="hidden lg:block md:block">
        <div
          className={`flex items-center navbar-text gap-10 cursor-pointer z-10 ${
            openNav
              ? "bg-white h-screen fixed top-0 right-0 open"
              : "bg-white h-screen fixed top-0 right-0"
          }`}
        >
          <div className={`${isModalOpen ? "hidden" : ""}`}>
            {openNav ? (
              <div className="fixed top-5 right-14 z-10 ">
                <i class="fa-solid fa-xmark" onClick={toggleNavbar}></i>
              </div>
            ) : (
              <div
                className={`flex items-center gap-10 cursor-pointer fixed top-6 right-10 z-10 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                <i
                  class={`fa-regular ${darkMode ? "fa-sun" : "fa-moon"}`}
                  onClick={toogleDarkMode}
                ></i>
                <i class="fa-solid fa-bars" onClick={toggleNavbar}></i>
              </div>
            )}
          </div>
          <div
            className={`navbar-text${
              openNav
                ? "absolute top-0 right-0  flex items-center"
                : "absolute top-0 right-0  flex items-center"
            }`}
          >
            <img
              src={require("../plugin/img/garis-nav.png")}
              alt=""
              className="h-[90vh]"
            />
            <ul className=" uppercase text-2xl leading-[3rem] font-bold ">
              <li className="hover:text-hijau">
                <button className="uppercase" onClick={scrollToHome}>
                  Home
                </button>
              </li>
              <li className="hover:text-hijau">
                <button className="uppercase" onClick={scrollToSkills}>
                  Skils
                </button>
              </li>
              <li className="hover:text-hijau">
                <button className="uppercase" onClick={scrollToBlog}>
                  Blog
                </button>
              </li>
              <li className="hover:text-hijau">
                <button className="uppercase" onClick={scrollToContact}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile APp */}
      <div className="dropdownn w-full lg:hidden xl:hidden md:hidden uppercase fixed top-0 left-0 z-10 ">
        <div
          className={`flex justify-between gap-3 w-full pb-3 py-4 items-center px-5 ${
            scrollNavbar && darkMode
              ? "bg-black text-white"
              : "" || scrollNavbar
              ? "bg-white"
              : ""
          }`}
          id="appNav"
        >
          <div
            className={`uppercase font-bold w-[100%]
               ${darkMode ? "text-white" : ""}`}
            onClick={tutup}
          >
            trajuszt
          </div>
          <div className="flex gap-3">
            <i
              class={`fa-regular cursor-pointer ${
                darkMode ? "fa-sun text-white" : "fa-moon"
              }`}
              onClick={toogleDarkMode}
            ></i>
            <i
              class={`fa-solid fa-bars cursor-pointer ${
                darkMode ? "text-white" : ""
              }`}
              onClick={toggleDropdown}
            ></i>
          </div>
        </div>
        <div
          className={`dropdown-menuu h-screen  ${isOpen ? "open " : ""}`}
          onClick={toggleDropdown}
        >
          <ul
            className=" text-amber-950 bg-white max-sm:text-sm pb-5 sm:text-xs font-semibold"
            onClick={handleSliderClick}
          >
            <li className="hover:text-hijau px-10 hover:bg-abu-abu-100 cursor-pointer">
              <button
                onClick={scrollToHome}
                className="w-full text-start py-2 uppercase"
              >
                Home
              </button>
            </li>
            <li className="hover:text-hijau px-10 hover:bg-abu-abu-100 cursor-pointer">
              <button
                onClick={scrollToSkills}
                className="w-full text-start py-2 uppercase"
              >
                Skils
              </button>
            </li>
            <li className="hover:text-hijau px-10 hover:bg-abu-abu-100 cursor-pointer">
              <button
                onClick={scrollToBlog}
                className="w-full text-start py-2 uppercase"
              >
                Blog
              </button>
            </li>
            <li className="hover:text-hijau px-10 hover:bg-abu-abu-100 cursor-pointer">
              <button
                onClick={scrollToContact}
                className="w-full text-start py-2 uppercase"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
