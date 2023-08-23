import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <div name='About' className='w-full h-auto md:h-screen bg-gradient-to-b from-[#D3F9B5] to-[#989FCE]'>
      <div className='max-w-[1200px] mx-auto px-6 md:px-16 flex flex-col justify-center h-full'>
        <div className='flex flex-col md:flex-row items-center mb-12'>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <img
              src={profile}
              alt='Profile Picture'
              className='rounded-lg w-96 h-auto border-8 border-[#F2A65A] shadow-xl mx-auto md:mx-0'
            />
          </div>
          <div className='w-full md:w-2/3 pl-0 md:pl-12'>
            <p className='text-3xl text-[#F58549] mb-2 md:mb-4'>About Me</p>
            <h1 className='text-5xl sm:text-7xl font-bold text-[#393D3F] mt-2 md:mt-4'>
              Arael Tijerina Jr
            </h1>
            <h2 className='text-5xl sm:text-5xl py-2 md:py-6 font-bold text-[#F58549]'>
              Full Stack Developer
            </h2>
            <p className='text-[#393D3F] py-2 md:py-6 max-w-[900px] text-xl'>
              Hi there! I'm Arael, a junior web developer based in Brownsville, TX. I hold a
              certification in full stack development from the coding bootcamp at the University of
              Texas Austin. Currently, I'm pursuing a bachelor's degree in computer engineering at
              the University of Texas Rio Grande Valley. I'm passionate about both front-end and
              back-end development, and I love creating interactive and user-friendly web
              applications. My skill set includes HTML, CSS, JavaScript, React, Node.js, and more.
              I'm dedicated to continuous learning and excited about the ever-evolving world of web
              development.
            </p>
            <div>
              <button className='text-[#F58549] group border-2 border-[#F58549] px-6 md:px-8 py-3 md:py-4 my-2 md:my-4 flex items-center transform transition-transform hover:scale-110'>
                <Link to='Projects' smooth={true} duration={500}>
                  View Work
                </Link>
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-2 md:ml-4' />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
