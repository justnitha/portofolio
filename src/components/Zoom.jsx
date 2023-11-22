import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Portofolio1 } from "./Sheat/Porto";

const Zoom = ({ isOpen, onClose, selectedItemId }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Fungsi untuk menutup modal
  const handleClose = () => {
    onClose();
  };
  const CustomPrevArrow = (props) => (
    <button
      className={`absolute top-[12.5rem] left-5 cursor-pointer z-10 hidden`}
      onClick={props.onClick}
    >
      <i className="fa-solid fa-chevron-left fa-xl"></i>
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      className={`absolute right-5 bottom-[13.5rem] hidden`}
      onClick={props.onClick}
    >
      <i className="fa-solid fa-chevron-right fa-xl"></i>
    </button>
  );
  const settings = {
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots-quick">{dots}</ul>
      </div>
    ),
    customPaging: (index) => (
      <div
        className={`custom-dot-quick -mt-[40px] lg:-mt-[100px] ${
          index === activeIndex ? "active " : ""
        }`}
      />
    ),
    beforeChange: (current, next) => setActiveIndex(next),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  return (
    <div>
      {isOpen && (
        <div className="fixed w-full bg-black opacity-40 left-0 top-0 h-full z-20"
          onClick={handleClose} 
        ></div>
      )}
      {isOpen && (
        <i
        className="fa-solid fa-xmark cursor-pointer top-0 text-white fixed right-10 pt-5 fa-2x z-20"
        onClick={handleClose}
        ></i>
      )}
      {isOpen && (
        <div className="top-[9rem] left-10 md:top-32 lg:top-[none] lg:left-[none] lg:inset-[9rem] mx-auto h-[22rem] md:h-[50rem] lg:h-[29rem] z-50 fixed w-[78%] md:w-[90%] lg:w-[65%]">
          {Portofolio1.map((item) => {
            if (item.id === selectedItemId) {
              return (
                <div key={item.id}>
                  <div
                    className={`bg-amber-50 rounded-2xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 h-[22rem] md:h-[50rem] lg:h-[29rem]  mx-auto`}
                  >
                    <Slider {...settings} className="w-[80%] mx-auto mt-10 lg:mt-10 md:mt-16">
                      <img
                        src={item.image}
                        alt="gambar1"
                        className="lg:mt-16 object-contain cursor-pointer"
                      />
                      <img
                        src={item.image2}
                        alt="gambar2"
                        className="lg:mt-16 object-contain cursor-pointer"
                      />
                      <img
                        src={item.image3}
                        alt="gambar3"
                        className="lg:mt-16 object-contain cursor-pointer"
                      />
                    </Slider>
                    <div className="lg:mt-10 lg:pe-10 px-5 md:text-2xl lg:text-xl ">
                      <h1 className="text-center text-xl font-bold hidden lg:block">
                        Latihan Menduplicate With <br />
                        <span className="text-hijau">
                          React-js <span className="text-black">dan</span>{" "}
                          Tailwindcss
                        </span>
                      </h1>
                      
                      <div className="lg:block hidden">
                        <p className="mt-7 font-bold">Objek Duplikat : <a href={`${item.href}`} className="font-normal">{item.objek}</a> </p>
                        <p className="mt-4 font-bold">Tujuan : <span className="font-normal">{item.Tujuan}</span></p>
                      </div>
                      <div 
                      className=""
                      // className="lg:flex items-center mt-16 bg-red-500 justify-center lg:gap-10 gap-2 text-sm sm:text-sm md:text-base lg:text-base"
                      >
                        <div className="uppercase text-center">
                          <a href={item.link} className="bg-hijau  hover:bg-[#62ad90] focus:ring-4 focus:ring-green-200 text-white px-4 py-3 rounded-md">lihat project</a>
                        </div>
                        {/* <div className="uppercase">
                          <a href={item.code} className="hover:bg-[#4eabcf] bg-[#337CCF] focus:ring-4 focus:ring-blue-200 text-white px-4 py-3 rounded-md">lihat code</a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            else {
              return ""
            }
          })}
        </div>
      )}
    </div>
  );
};
export default Zoom;
