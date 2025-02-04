import React, { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidSun } from "react-icons/bi";
{/* import { FaCaretDown } from "react-icons/bi";*/}

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark"){
        element.classList.add("dark");
        localStorage.setItem("theme","dark");
    } else {
        element.classList.remove("dark");
        localStorage.removeItem("theme");
    }
  }, [theme]);


  return (
    <header className="bg-navbar text-white border-b-[1px] border-primary/50">
    <nav className="container flex items-center justify-between h-[70px] py-2">
        {/* Logo Section*/}
        <div className="text-2xl md:text-3xl text-white">
            <a href="#"> 
                FYNA <span className="inline-block font-bold text-primary">-TECH</span></a>
        </div>
        {/* Desktop menu Section*/}
        <div>
            <ul className="flex items-center gap-4">
                <li className="group relative cursor-pointer">
                    <a href="#" className="flex items-center gap-[2px] h-[72px]">
                        Home {/* <span>
                            <FaCaretDown className ="transition-all duration-200
                            group-hover:rotate-180"/>
                        </span> */}
                    </a>
                    {/* dropdown section */}
                    <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white p-2
                    text-black shadow-md group-hover:block">
                        <ul className="space-y-3">
                            <li className="p-2 hover:bg-violet-200">Services</li>
                            <li className="p-2 hover:bg-violet-200">About Us</li>
                            <li className="p-2 hover:bg-violet-200">Privacy Policy</li>
                        </ul>
                    </div>
                </li>
                <li className="group relative cursor-pointer">
                    <a href="#" className="flex items-center gap-[2px] h-[72px]">
                        Services {/* <span>
                            <FaCaretDown className ="transition-all duration-200
                            group-hover:rotate-180"/>
                        </span> */}
                    </a>
                    {/* dropdown section */}
                    <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white p-2
                    text-black shadow-md group-hover:block">
                        <ul className="space-y-3">
                            <li className="p-2 hover:bg-violet-200">Web Building</li>
                            <li className="p-2 hover:bg-violet-200">Tech Solutions</li>
                            <li className="p-2 hover:bg-violet-200">Digital Marketing</li>
                        </ul>
                    </div>
                </li>
                
                <li>Contact Us</li>
                <li>
                    <div className="flex items-center gap-4">
                        <div>
                            <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2
                             text-white bg-primary hover:bg-primary/90" />
                        </div>
                        <div>
                            <p>Call us on</p>
                            <p>
                                <a href="tel:+254791038553"> 0791038553</a>
                            </p>
                        </div>
                    </div>
                    
                </li>
                {/*Light and dark mode switcher*/}
                <BiSolidSun className="text-2xl" />
            </ul>
        </div>
        {/* Mobile menu Section*/}

    </nav>
    </header>
  );
};

export default Navbar; 
