import React from "react";
import splash from "../plugin/img/spalsh.png"
import "../plugin/css/Home.css"

const Perkenalan =  ()=> {
    return(
        <div className="lg:flex px-10 justify-between items-center"  id="home">
            <div className="lg:w-[50%] pt-32 text-center lg:text-start">
                <div className=" uppercase">
                    <h1 className="font-semibold">Hello, <span className="text-hijau">my name is</span></h1>
                    <h1 className="text-4xl sm:text-7xl lg:text-7xl py-4 font-extrabold text-hijau text-with-shadow text-stroke">ajust <span className="text-white">putra</span></h1>
                    <h1 className="hidden lg:block font-semibold tracking-widest">i am <span className="text-decor text-4xl">student</span></h1>
                </div>
                <div className="mt-10 hidden lg:block">
                    <p className=" leading-8 text-abu-abu">
                        From Indonesia, Bali. I have rich experience in web design. <br /> I love to talk  with you about our unique. 
                    </p>
                    <ul className="flex items-center gap-5 text-2xl py-7">
                        <li className="hover:text-hijau"><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li className="hover:text-hijau"><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        <li className="hover:text-hijau"><a href=""><i class="fa-brands fa-github"></i></a></li>
                    </ul>
                    <div className="flex uppercase font-bold mt-5 items-center gap-10">
                        <div className="flex items-center">
                        <h1 className="py-4 px-10  border-2 hover:border-white rounded-[2rem] box-shadw cursor-pointer outline-2 outline outline-black ">download cv</h1>
                        <div className="h-[0.1rem] bg-black w-16"></div>
                        </div>
                        <h1 className="cursor-pointer"><a href="#skils">my skils</a></h1>
                    </div>
                </div>
            </div>
            <div className="-mt-16 md:mt-10 lg:-mt-0 lg:h-screen h-[70vh] bg-cover bg-no-repeat lg:w-[50%]"
            //  style={{backgroundImage:`url(${splash})`,}}
             >
                <img src={require("../plugin/img/foto-brand.png")} alt="brand" className="lg:h-[80vh] h-[50vh] md:h-[60vh] mt-20 lg:ms-auto mx-auto" />
            </div>
            {/* app */}
            <div className="hidden md:block lg:hidden text-center text-2xl">
                    <p className=" leading-8 text-abu-abu">
                        From Indonesia, Bali. I have rich experience in web design. <br /> I love to talk  with you about our unique. 
                    </p>
                    <ul className="flex items-center gap-5 text-3xl py-7 mt-5 justify-center">
                        <li className="hover:text-hijau"><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li className="hover:text-hijau"><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        <li className="hover:text-hijau"><a href=""><i class="fa-brands fa-github"></i></a></li>
                    </ul>
                    <div className="flex uppercase font-bold mt-5 items-center  gap-10">
                        <div className="flex items-center">
                        <h1 className="py-4 px-10  border-2 hover:border-white rounded-[2rem] box-shadw cursor-pointer outline-2 outline outline-black ">download cv</h1>
                        <div className="h-[0.1rem] bg-black w-16"></div>
                        </div>
                        <h1 className="cursor-pointer"><a href="#skils">my skils</a></h1>
                    </div>
                </div>
            
        </div>
    )
} 
export default Perkenalan