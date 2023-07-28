import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Portofolio1 } from "./Sheat/Porto";
import "../plugin/css/Portofolio.css";

const Zoom = ({ isOpen, onClose, selectedItemId }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
        className={`custom-dot-quick  ${
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
  };
  return (
    <div>
      {isOpen && (
        // untuk background
        <div className="absolute w-full bg-black opacity-50 left-0 top-0 h-[400vh] z-10">
          <i
            class="fa-solid fa-xmark cursor-pointer text-white fixed right-2 p-2 fa-2x"
            onClick={handleClose}
          ></i>
        </div>
      )}
      {isOpen && (
        <div className="top-[10rem] left-20 z-50 fixed">
          {Portofolio1.map((item) => {
            if (item.id === selectedItemId) {
              return (
                <div key={item.id}>
                  <div
                    className={`grid grid-cols-2 gap-5 bg-white w-[65%] h-[29rem] mx-auto`}
                  >
                    <Slider {...settings} className="w-[80%] mx-auto mt-10">
                      <img
                        src={item.image}
                        alt="gambar1"
                        className="h-[20rem]"
                      />
                      <img
                        src={item.image2}
                        alt="gambar2"
                        className="h-[20rem]"
                      />
                      <img
                        src={item.image3}
                        alt="gambar3"
                        className="h-[20rem]"
                      />
                    </Slider>
                    <div className="mt-10 pe-10">
                      <h1 className="text-center text-xl font-bold">
                        Latihan Menduplicate With <br />
                        <span className="text-hijau">
                          React-js <span className="text-black">dan</span>{" "}
                          Tailwindcss
                        </span>
                      </h1>
                      
                      <div>
                        <p className="mt-7">Objek Duplikat : {item.objek}</p>
                        <p className="mt-4">Tujuan : {item.Tujuan}</p>
                      </div>
                      <div className="flex items-center mt-16 justify-center gap-10">
                        <button className="uppercase">
                          <a href={item.link}>lihat project</a>
                        </button>
                        <button className="uppercase">
                          <a href={item.code}>lihat code</a>
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
{
  /* <div
className={` bg-white  w-[65%] h-[29rem] mx-auto`}
>
    sdsadas Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt dolorum voluptatem et, delectus eum, at repudiandae quidem a nulla cum dignissimos ea minus, omnis ratione facilis tempore enim! Vero, aut repudiandae? At velit magnam dolorem qui molestiae temporibus nesciunt iste repellat sapiente harum vero, modi ut iure distinctio! Quam ut, unde iste voluptatem libero, quia ea natus itaque recusandae aspernatur dicta nihil. Dolorem quam eum inventore voluptas aspernatur maxime mollitia beatae voluptates. Delectus veritatis consequatur voluptatem aliquid tenetur quos quaerat dolorem reprehenderit amet temporibus, quas dolore sunt laboriosam, fugiat a, tempora omnis iusto nostrum quia esse id. In, fugiat?
</div> */
}
