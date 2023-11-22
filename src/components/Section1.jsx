import React from "react";


const Perkenalan =  ({darkMode,homeLinkRef,scrollToSkills})=> {
    return(
        <div className="lg:flex lg:mt-20 px-10 justify-between items-center py-10 lg:py-0"  ref={homeLinkRef}>
            <div className="lg:w-[50%] lg:-mt-28 md:mt-10 sm:mt-20 mt-12 text-center lg:text-start ">
                <div className=" uppercase">
                    <h1 className={`font-semibold ${darkMode ? "text-white" : "text-black "}`}>Hello, <span className="text-hijau">my name is</span></h1>
                    <h1 className={`text-4xl sm:text-7xl lg:text-7xl py-4 font-extrabold text-hijau text-stroke ${darkMode ? "" : "text-with-shadow "}`}>ajust <span className="text-white">putra</span></h1>
                    <h1 className={`hidden lg:block font-semibold tracking-widest ${darkMode ? "text-white" : "text-black"}`}>i am <span className="text-decor text-4xl">student</span></h1>
                </div>
                <div className={`mt-10 hidden lg:block ${darkMode? "text-white" : "text-black"}`}>
                    <p className={`leading-8 ${darkMode ? "text-white" : "text-abu-abu"}`}>
                        From Indonesia, Bali. I have rich experience in web design. <br /> I love to talk  with you about our unique. 
                    </p>
                    <ul className="flex items-center gap-5 text-2xl py-7">
                        <li className="hover:text-hijau"><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                        <li className="hover:text-hijau"><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                        <li className="hover:text-hijau"><a href="https://github.com/justnitha"><i className="fa-brands fa-github"></i></a></li>
                    </ul>
                    <div className="flex uppercase font-bold mt-5 items-center gap-10">
                        <div className="flex items-center">
                        <h1 className="py-4 px-10  border-2 hover:border-white rounded-[2rem] box-shadw cursor-pointer outline-2 outline outline-black ">download cv</h1>
                        <div className={`h-[0.1rem] w-16 ${darkMode ? "bg-white" : "bg-black"}`}></div>
                        </div>
                        <h1 className="cursor-pointer" onClick={scrollToSkills}>my skils</h1>
                    </div>
                </div>
            </div>
            <div className="-mt-16  lg:-mt-0 lg:h-screen h-[70vh] bg-cover bg-no-repeat lg:w-[50]"
            //  style={{backgroundImage:`url(${splash})`,}}
             >
                <img src={require("../plugin/img/ajust-foto-profil.png")} alt="brand" className="lg:h-[80vh] h-[45vh] md:h-[60vh] mt-24 lg:mt-0 lg:ms-auto mx-auto" />
            </div>

            {/* app */}
            <div className={`hidden md:block lg:hidden text-center text-2xl ${darkMode ? "text-white" : "text-black"}`}>
                    <p className=" leading-8 ">
                        From Indonesia, Bali. I have rich experience in web design. <br /> I love to talk  with you about our unique. 
                    </p>
                    <ul className="flex items-center gap-5 text-3xl py-7 mt-5 justify-center">
                        <li className="hover:text-hijau"><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                        <li className="hover:text-hijau"><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                        <li className="hover:text-hijau"><a href="https://github.com/justnitha"><i className="fa-brands fa-github"></i></a></li>
                    </ul>
                    <div className="flex uppercase font-bold mt-5 items-center  gap-10">
                        <div className="flex items-center">
                        <h1 className="py-4 px-10  border-2 hover:border-white rounded-[2rem] box-shadw cursor-pointer outline-2 outline outline-black ">download cv</h1>
                        <div className={`h-[0.1rem] w-16 ${darkMode ? "bg-white" : "bg-black"}`}></div>
                        </div>
                        <h1 className="cursor-pointer" onClick={scrollToSkills}>my skils</h1>
                    </div>
                </div>
            
        </div>
    )
} 
export default Perkenalan