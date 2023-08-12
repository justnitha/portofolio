import React from "react"
import Skill from "./Sheat/SkilcoM"

const Skil =  ({darkMode, skillsLinkRef}) =>{
    return(
        <div className={`px-10 mx-auto lg:mt-20 -mt-10 sm:mt-32  ${darkMode ? "text-white" : "text-black"}`} ref={skillsLinkRef}>
            <h1 className="uppercase text-center lg:text-5xl text-2xl md:text-5xl font-bold">profesional Skills </h1>
            <p className=" text-hijau font-bold text-center mt-7">MY <span className={`decor text-3xl tracking-widest ${darkMode ? "text-white" : "text-black"}`}>Talent</span></p>
            <div className="gap-10 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 mt-16">
                <Skill 
                    bahasa="PHP"
                    persentase="25"
                    clasPersen="w-[25%]"
                    endPersen="w-[70%]"
                    artikel="-Membuat Form Login, Sign Up, Logut, CRUD"
                    artikel1="-Perulangan"
                    artikel2="-Menghubungkan database dengan Php"
                    artikel3="-inputan dari User ke database"
                />
                <Skill
                    bahasa="Javascript"
                    persentase="20"
                    clasPersen="w-[20%]"
                    endPersen="w-[75%]"
                    artikel="javascript basic"
                    artikel1=" -"
                    artikel2=" -"
                    artikel3=" -"
                />
                <Skill
                    bahasa="Python"
                    persentase="40"
                    clasPersen="w-[40%]"
                    endPersen="w-[55%]"
                    artikel="Perulangan"
                    artikel1=" -"
                    artikel2=" -"
                    artikel3=" -"
                />
                <Skill
                    bahasa="Photoshop"
                    persentase="40"
                    clasPersen="w-[40%]"
                    endPersen="w-[55%]"
                    artikel="Photoshop basic"
                    artikel1=" -"
                    artikel2=" -"
                    artikel3=" -"
                />
                <Skill
                    bahasa="Tailwind CSS"
                    persentase="80"
                    clasPersen="w-[80%]"
                    endPersen="w-[15%]"
                    artikel="- Responsive"
                    artikel1="-"
                    artikel2=" -"
                    artikel3=" -"
                />
                <Skill
                    bahasa="React JS"
                    persentase="50"
                    clasPersen="w-[50%]"
                    endPersen="w-[45%]"
                    artikel="- UseState,UseRef,UseEfect"
                    artikel1="- Beberapa Library"
                    artikel2=" - "
                    artikel3=" -"
                />
            </div>
        </div>
    )
}
export default Skil