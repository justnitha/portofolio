import React,{useState} from "react"
import Navbar from "../components/Navbar"
import Perkenalan from "../components/Section1"
import Skil from "../components/Skils"
import Portofolio from "../components/Portofolio"
import SignupForm from "../components/Form"

function Home () {
    
    return(
        <div className=" bg-[#f1eee8]">
            <Navbar/>
            <Perkenalan/>
            <Skil/>
            <Portofolio/>
            <SignupForm/>
            <footer className="">
                <img src={require("../plugin/img/boba-bawah.png")} alt="gambar5" className="w-[50px]" />
                <div className="flex items-center justify-between px-10  py-10">
                    <div className=" w-[25%]">
                        <ul className="flex items-center gap-5 lg:text-2xl py-7">
                            <li className="hover:text-hijau"><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                            <li className="hover:text-hijau"><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                            <li className="hover:text-hijau"><a href=""><i class="fa-brands fa-github"></i></a></li>
                        </ul>
                    </div>
                    <div className=" w-[50%] text-center hidden lg:block">
                        <p className="font-bold tracking-wider"> © 2022 <span className="text-hijau">TRAJUSZT</span>. ALL RIGHTS RESERVED</p>
                    </div>
                    <div className="text-end lg:w-[25%]">
                        <p className="font-bold tracking-wider">DEVELOPED BY <span className="text-hijau uppercase">justnitha</span></p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Home