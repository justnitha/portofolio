import { Portofolio1 } from "./Sheat/Porto";
import React, { useState, useRef } from "react";
import boba from "../plugin/img/boba.png";
// import "../plugin/css/Portofolio.css";
import Zoom from "./Zoom";

const Portofolio = ({darkMode,blogLinkRef}) => {
  const [hoverItem, setHoverItem] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [visibleImages, setVisibleImages] = useState(3); // State untuk jumlah gambar yang ditampilkan
  const [viewMoreClicked, setViewMoreClicked] = useState(false); // State untuk melacak apakah tombol "view more" telah ditekan
  const scrollTargetRef = useRef(null); // Referensi untuk elemen target yang akan di-scroll
 
  const handleStopClick = (e) => {
    // Menghentikan event dari merambat ke elemen di atasnya
    e.stopPropagation();
  };
  
  const handleOpenModal = (itemId) => {
    setSelectedItemId(itemId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
    setIsModalOpen(false);  
  };
  const handleViewMore = () => {
    setVisibleImages((prevCount) => prevCount + 3); // Menambahkan 6 gambar setiap kali tombol "view more" ditekan
    setViewMoreClicked(true);
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleResetViewMore = () => {
    setVisibleImages(3);
    setViewMoreClicked(false);
    if (blogLinkRef.current) {
      blogLinkRef.current.scrollIntoView({ behavior: "smooth" });
    }
  
  }
  
  return (
    <div className={`px-10 mx-auto mt-32 ${isModalOpen ? "" : ""}`} ref={blogLinkRef}>
      <h1 className={`uppercase text-center text-3xl md:text-5xl lg:text-5xl font-bold ${darkMode ? "text-white" : "text-black"}`}>portofolio </h1>
      <p className=" text-hijau font-bold text-center mt-7 mb-10">
        MY{" "}
        <span className={`text-black decor text-3xl tracking-widest ${darkMode ? "text-white" : "text-black"}`}>Cases</span>
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 lg:gap-10">
      {Portofolio1.slice(0, visibleImages).map((item) => (
          <div
            key={item.id}
            className="mt-7  "
            onMouseEnter={() => setHoverItem(item.id)}
            onMouseLeave={() => setHoverItem(null)}
          >
            <div className="bg-white hoverr px-5 sm:p-12 md:p-5 rounded-3xl cursor-pointer" 
            onClick={() => handleOpenModal(item.id)}
            >
              <div className={`${hoverItem ? "hover" :"hover"}`}>
              <img
                id="view"
                src={item.image}
                alt={item.image}
                className="rounded-3xl h-[14rem] sm:h-[17rem] w-full object-contain"
                onClick={() => handleOpenModal(item.id)}
                />
              </div>
              {hoverItem === item.id && (
                <div className={`${isModalOpen ? "hidden " : ""}`}>
                  <button
                    className="absolute lg:ms-[19rem] hidden lg:block ms-[11rem] mt-5 border-2 hover:text-white hover:bg-hijau hover:border-white py-2 px-3 rounded-[3rem] perbesar outline-2 outline outline-black transisi"
                    onClick={() => handleOpenModal(item.id)}
                  >
                    <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
                  </button>
                  <div className="perbesar"></div>
                </div>
              )}
              <h1 className="uppercase font-bold text-hijau text-sm tracking-widest ">
                {item.name}
              </h1>
              <h1 className="text-2xl font-bold mt-3">{item.judul}</h1>
              <p className="mt-5">{item.paragraf}</p>
              <h1 className="font-bold mt-10">
                <a href={item.link} onClick={handleStopClick}>
                  See project
                </a>
              </h1>
              <div>
                <img
                  src={`${boba}`}
                  alt=""
                  className="h-[7rem] ms-auto -mt-16 img pb-3 lg:pb-0"
                />
              </div>
            </div>
            <Zoom
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              selectedItemId={selectedItemId}
            />
          </div>
        ))}
          {/* target untuk scroll smoth pas klik view more */}
         <div ref={scrollTargetRef}></div>
      </div>
     <div className="text-center md:mt-16 mt-10">
     {viewMoreClicked ? (
          <button
            className="py-3 px-9 text-xl font-semibold bg-white rounded-3xl box-shadw border-black border-2 hover:border-white"
            onClick={handleResetViewMore}
          >
            Reset View
          </button>
        ) : (
          <button
            className="py-3 px-9 text-xl font-semibold bg-white rounded-3xl box-shadw border-black border-2 hover:border-white"
            onClick={handleViewMore}
          >
            View more
          </button>
        )}
     </div>
    </div>
  );
};
export default Portofolio;
