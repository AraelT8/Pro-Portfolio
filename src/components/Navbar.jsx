import React, { useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
// component that will be exported to App.js and rendered on the navbar of the website
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center px-6 bg-red text-[#393D3F]">

     
      <ul className="hidden md:flex space-x-6 text-xl font-semibold flex-grow items-center justify-end">
        <li>
          <Link className="border border-[#F2A65A] py-3 px-6 hover:bg-[#F2A65A] hover:text-white rounded-lg" to="About" smooth={true} duration={500}>About</Link>
        </li>
        <li>
          <Link className="border border-[#F2A65A] py-3 px-6 hover:bg-[#F2A65A] hover:text-white rounded-lg" to="Resume" smooth={true} duration={500}>Resume</Link>
        </li>
        <li>
          <Link className="border border-[#F2A65A] py-3 px-6 hover:bg-[#F2A65A] hover:text-white rounded-lg" to="Projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li>
          <Link className="border border-[#F2A65A] py-3 px-6 hover:bg-[#F2A65A] hover:text-white rounded-lg" to="Contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

     
      <div onClick={handleClick} className="md:hidden z-10"> 
        {!nav ? <FaBars /> : <FaBars />}
      </div>

    
      <ul className={`absolute top-0 right-0 w-full h-screen bg-[#525356] flex flex-col justify-center items-center ${nav ? '' : 'hidden'}`}>
        <li className="py-8 text-5xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="py-8 text-5xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Resume</Link>
        </li>
        <li className="py-8 text-5xl">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="py-8 text-5xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[30%] right-0 space-y-4">
        <a className="w-[80px] h-[80px] flex justify-center items-center bg-[#989FCE] text-white rounded-lg hover:bg-[#F2A65A]" href="https://www.linkedin.com/in/arael-tijerina-jr-399220285/">
          <FaLinkedin size={48} />
        </a>
        <a className="w-[80px] h-[80px] flex justify-center items-center bg-[#393D3F] text-white rounded-lg hover:bg-[#F58549]" href="https://github.com/AraelT8">
          <FaGithub size={48} />
        </a>
        <a className="w-[80px] h-[80px] flex justify-center items-center bg-[#F58549] text-white rounded-lg hover:bg-[#F2A65A]" href="https://twitter.com/digital_Arael">
          <FaTwitter size={48} />
        </a>
        <a className="w-[80px] h-[80px] flex justify-center items-center bg-[#F2A65A] text-white rounded-lg hover:bg-[#F58549]" href="mailto:araeltiejerina@gmail.com">
          <HiOutlineMail size={48} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
