import React from "react"
import Skill from "./Sheat/SkilcoM"

const Skil =  ({darkMode}) =>{
    return(
        <div className={`px-10 mx-auto lg:mt-28 -mt-10 sm:mt-32 ${darkMode ? "text-white" : "text-black"}`} id="skils">
            <h1 className="uppercase text-center lg:text-5xl text-2xl md:text-5xl font-bold">profesional Skills </h1>
            <p className=" text-hijau font-bold text-center mt-7">MY <span className={`decor text-3xl tracking-widest ${darkMode ? "text-white" : "text-black"}`}>Talent</span></p>
            <div className="gap-10 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 mt-16">
                <Skill 
                    
                    bahasa="PHP"
                    persentase="25"
                    clasPersen="w-[25%]"
                    endPersen="w-[70%]"
                />
                <Skill
                    bahasa="Javascript"
                    persentase="20"
                    clasPersen="w-[20%]"
                    endPersen="w-[75%]"
                />
                <Skill
                    bahasa="Python"
                    persentase="40"
                    clasPersen="w-[40%]"
                    endPersen="w-[55%]"
                />
                <Skill
                    bahasa="Photoshop"
                    persentase="40"
                    clasPersen="w-[40%]"
                    endPersen="w-[55%]"
                />
                <Skill
                    bahasa="Tailwind CSS"
                    persentase="80"
                    clasPersen="w-[80%]"
                    endPersen="w-[15%]"
                />
                <Skill
                    bahasa="React JS"
                    persentase="50"
                    clasPersen="w-[50%]"
                    endPersen="w-[45%]"
                />
            </div>
        </div>
    )
}
export default Skil