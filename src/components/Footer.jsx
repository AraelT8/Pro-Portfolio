import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full h-[300px] bg-gradient-to-b from-[#D3F9B5] to-[#989FCE] flex flex-col justify-center items-center p-4 text-[#393D3F]'>
      <p className='mb-4'>Let's Make magic happen!</p>
      <div className='flex space-x-4'>
        <a href='https://www.linkedin.com/in/arael-tijerina-jr-399220285/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin size={24} className='hover:text-[#F2A65A]' />
        </a>
        <a href='https://github.com/AraelT8' target='_blank' rel='noopener noreferrer'>
          <FaGithub size={24} className='hover:text-[#F2A65A]' />
        </a>
        <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
          <FaTwitter size={24} className='hover:text-[#F2A65A]' />
        </a>
      </div>
      <p className='mt-4'>&copy; {new Date().getFullYear()} Arael Tijerina Jr. All rights reserved.</p>
    </div>
  );
};

export default Footer;
