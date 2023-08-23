import React, { useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center px-6 bg-red text-[#393D3F]">
      {/* Web Mode Menu */}
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

      {/* Mobile Menu */}
      <div className="md:hidden z-10">
        <FaBars onClick={handleClick} />
      </div>

      {/* Mobile Menu Content */}
      {nav && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center z-20">
          <Link onClick={handleClick} to="About" smooth={true} duration={500} className="text-4xl mb-4">About</Link>
          <Link onClick={handleClick} to="Resume" smooth={true} duration={500} className="text-4xl mb-4">Resume</Link>
          <Link onClick={handleClick} to="Projects" smooth={true} duration={500} className="text-4xl mb-4">Projects</Link>
          <Link onClick={handleClick} to="Contact" smooth={true} duration={500} className="text-4xl">Contact</Link>
        </div>
      )}

      {/* Social Links */}
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
