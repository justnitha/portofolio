import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Portofolio1 } from "./Sheat/Porto";

const Zoom = ({ isOpen, onClose, selectedItemId }) => {
  // const [selectedOption, setSelectedOption] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  // Fungsi untuk menutup modal
  const handleClose = () => {
    onClose();
  };
  const CustomPrevArrow = (props) => (
    <button
      className={`absolute top-[12.5rem] left-5 cursor-pointer z-10 text-black hidden`}
      onClick={props.onClick}
    >
      <i class="fa-solid fa-chevron-left fa-xl"></i>
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      className={`absolute right-5 bottom-[13.5rem] text-black hidden`}
      onClick={props.onClick}
    >
      <i class="fa-solid fa-chevron-right fa-xl"></i>
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
        className={`custom-dot-quick mt-[5px] lg:-mt-[30px] ${
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
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
  return (
    <div>
      {isOpen && (
        <div className="fixed w-full bg-black opacity-30 left-0 top-0 h-full z-20"
          onClick={handleClose} 
        ></div>
      )}
      {isOpen && (
        <i
        class="fa-solid fa-xmark cursor-pointer top-0 text-white fixed right-10 pt-5 fa-2x z-20"
        onClick={handleClose}
        ></i>
      )}
      {isOpen && (
        <div className=" top-20 left-10 md:top-32 lg:top-[none] lg:left-[none] lg:inset-[9rem] mx-auto h-[29rem] md:h-[50rem] lg:h-[29rem] z-50 fixed w-[78%] md:w-[90%] lg:w-[65%]">
          {Portofolio1.map((item) => {
            if (item.id === selectedItemId) {
              return (
                <div key={item.id}>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 bg-white h-[35rem] md:h-[50rem] lg:h-[29rem]  mx-auto`}
                  >
                    <Slider {...settings} className="w-[80%] mx-auto mt-5 lg:mt-10 md:mt-16">
                      <img
                        src={item.image}
                        alt="gambar1"
                        className="lg:h-[20rem] object-contain"
                      />
                      <img
                        src={item.image2}
                        alt="gambar2"
                        className="lg:h-[20rem] object-contain"
                      />
                      <img
                        src={item.image3}
                        alt="gambar3"
                        className="lg:h-[20rem] object-contain"
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
                      
                      <div>
                        <p className="mt-7 font-bold">Objek Duplikat : <a href={`${item.href}`} className="font-normal">{item.objek}</a> </p>
                        <p className="mt-4 font-bold">Tujuan : <span className="font-normal">{item.Tujuan}</span></p>
                      </div>
                      <div className="flex items-center mt-16 justify-center lg:gap-10 gap-2 text-xs sm:text-sm md:text-base lg:text-base">
                        <button className="uppercase">
                          <a href={item.link} className="bg-hijau hover:bg-[#5C8374] text-white px-4 py-2 rounded-md">lihat project</a>
                        </button>
                        <button className="uppercase">
                          <a href={item.code} className="hover:bg-[#090580] bg-[#337CCF] text-white px-4 py-2 rounded-md">lihat code</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
export default Zoom;
