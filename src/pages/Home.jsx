import React,{useState, useEffect, useRef} from "react"
import Navbar from "../components/Navbar"
import Perkenalan from "../components/Section1"
import Skil from "../components/Skils"
import Portofolio from "../components/Portofolio"
import SignupForm from "../components/Form"


function Home () {
    const [darkMode, setDarkMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    // Ubah latar belakang halaman sesuai dengan tema gelap/terang
    if (darkMode) {
      document.body.style.backgroundColor = "#252931";
    } else {
        document.body.style.backgroundColor = "#f1eee8";
    }
  }, [darkMode]);

  
  const homeLinkRef = useRef(null);
  const skillsLinkRef = useRef(null);
  const blogLinkRef = useRef(null);
  const contactLinkRef = useRef(null);

  const scrollToHome = () => {
    homeLinkRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    skillsLinkRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBlog = () => {
    blogLinkRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactLinkRef.current.scrollIntoView({ behavior: "smooth" });
  };

    return(
        <div>
            <Navbar 
              darkMode={darkMode}
              toogleDarkMode={toggleDarkMode}
              scrollToHome={scrollToHome}
              scrollToSkills={scrollToSkills}
              scrollToBlog={scrollToBlog}
              scrollToContact={scrollToContact}
              isModalOpen={isModalOpen}
            />
            <Perkenalan 
              darkMode={darkMode} 
              homeLinkRef={homeLinkRef} 
              scrollToSkills={scrollToSkills}
            />
            <Skil
              darkMode={darkMode}  
              skillsLinkRef={skillsLinkRef}
            />
            <Portofolio 
              darkMode={darkMode} 
              blogLinkRef={blogLinkRef} 
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
            <SignupForm 
              darkMode={darkMode} 
              contactLinkRef={contactLinkRef}
            />
            <footer className={`${darkMode ? "text-white" : "text-black"}`}>
                <img src={require("../plugin/img/boba-bawah.png")} alt="gambar5" className="w-[50px]" />
                <div className="flex items-center justify-between px-10  py-10">
                    <div className=" w-[25%]">
                        <ul className="flex items-center gap-5 lg:text-2xl py-7">
                            <li className="hover:text-hijau"><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className="hover:text-hijau"><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                            <li className="hover:text-hijau"><a href="https://github.com/justnitha"><i className="fa-brands fa-github"></i></a></li>
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