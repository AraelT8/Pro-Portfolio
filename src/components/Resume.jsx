import React from 'react';
import Doc from '../assets/docs/resume.pdf';
import {
  FaJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNode,
  FaReact,
  FaNpm,
  FaNetworkWired,
  FaDownload,
} from 'react-icons/fa';
import { DiJqueryLogo, DiMongodb } from 'react-icons/di';
import {
  SiMysql,
  SiHeroku,
  SiWebpack,
  SiGraphql,
  SiTailwindcss,
} from 'react-icons/si';

const Resume = () => {
  return (
    <div name='Resume' className='w-full h-auto md:h-screen bg-gradient-to-b from-[#989FCE] to-[#D3F9B5] text-[#393D3F]'>
      <div className='max-w-[1000px] mx-auto p-6 md:p-8 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl md:text-5xl font-bold inline border-b-4 border-[#F2A65A] '>Resume</p>
          <p className='py-4 text-xl'>Proficient with:</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 text-center'>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <FaHtml5 size={60} className='mx-auto mb-4' />
            <p className='text-lg'>HTML</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <FaCss3Alt size={60} className='mx-auto mb-4' />
            <p className='text-lg'>CSS</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <FaJs size={60} className='mx-auto mb-4' />
            <p className='text-lg'>JavaScript</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <FaGithub size={60} className='mx-auto mb-4' />
            <p className='text-lg'>GitHub</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <FaNode size={60} className='mx-auto mb-4' />
            <p className='text-lg'>Node</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <FaReact size={60} className='mx-auto mb-4' />
            <p className='text-lg'>React</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <FaBootstrap size={60} className='mx-auto mb-4' />
            <p className='text-lg'>Bootstrap</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <FaNpm size={60} className='mx-auto mb-4' />
            <p className='text-lg'>Npm</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <FaNetworkWired size={60} className='mx-auto mb-4' />
            <p className='text-lg'>APIs</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <SiMysql size={60} className='mx-auto mb-4' />
            <p className='text-lg'>MySQL</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <SiHeroku size={60} className='mx-auto mb-4' />
            <p className='text-lg'>Heroku</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <SiGraphql size={60} className='mx-auto mb-4' />
            <p className='text-lg'>GraphQL</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <DiJqueryLogo size={60} className='mx-auto mb-4' />
            <p className='text-lg'>jQuery</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <DiMongodb size={60} className='mx-auto mb-4' />
            <p className='text-lg'>MongoDB, Mongoose</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <SiWebpack size={60} className='mx-auto mb-4' />
            <p className='text-lg'>Webpack</p>
          </div>
          <div className='shadow-md hover:scale-110 duration-300 rounded-lg p-6'>
            <SiTailwindcss size={60} className='mx-auto mb-4' />
            <p className='text-lg'>TailWind Css</p>
          </div>
          {/* Add more skill blocks here */}
        </div>
      </div>
      <div className='text-center py-4 md:py-6'>
        <a
          href={Doc}
          className='inline-flex items-center px-6 py-3 bg-[#F2A65A] text-white rounded-lg shadow-md transition-colors duration-300 hover:bg-[#F58549]'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='mr-2'>
            <FaDownload />
          </span>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
