import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Marvel from '../assets/projectsthumbnails/marvel.png';
import Book from '../assets/projectsthumbnails/bookshare.png';
import Jate from '../assets/projectsthumbnails/jate.png'
import Note from '../assets/projectsthumbnails/notes.png'
import Weather from '../assets/projectsthumbnails/weather.png'
import Quiz from '../assets/projectsthumbnails/quiz.png'
import Database from '../assets/projectsthumbnails/database.png'
import Shop from '../assets/projectsthumbnails/shop.png'
// component that will be exported to App.js and rendered on the projects page of the website
const Projects = () => {
  // array of objects that contain the information for each project that will be rendered on the page 
  const projects = [
    {
      title: 'BookShare',
      description: "BookShare is a platform for book lovers to connect, discuss, and share their reading experiences. Users can create posts, engage in conversations, and discover new books through an integrated API. It offers a dynamic space to interact, edit, delete posts, and connect with like-minded readers.",
      screenshot: Book,
      demoLink: 'https://coolbookshare-8cdf867ffeb3.herokuapp.com/',
      repoLink: 'https://github.com/AraelT8/Book-Share',
    },
    {
      title: 'Marvel Beyond The Multiverse',
      description: 'This website is your gateway to the Marvel universe, providing a seamless way to search for Marvel comics by character, title, or creator and discover corresponding movies. Explore comic covers and titles that lead to more information, stay updated with the latest releases, and curate your own comic collection.',
      screenshot: Marvel,
      demoLink: 'https://araelt8.github.io/Marvel-BTM/',
      repoLink: 'https://github.com/AraelT8/Marvel-BTM',
    },
    {
      title: 'Just A Text Editor',
      description: 'This web-based code editor empowers users to create code snippets offline, ensuring reliability and accessibility even without an internet connection. Through integrated service worker and Cache APIs, the application maintains full functionality, allowing seamless retrieval and utilization of code snippets anytime.',
      screenshot: Jate,
      demoLink: 'https://obscure-thicket-06238-f8b7e76df7f8.herokuapp.com/',
      repoLink: 'https://github.com/AraelT8/Just-A-Text-Editor',
    },
    {
        title:'Online-Notebook',
        description:'Utilizing an Express.js backend, this project stores and retrieves data from a JSON file, seamlessly deployed on Heroku. The Notebook project offers users a versatile online platform to create and access notes from any location. Users can effortlessly save, delete, and manage their notes, catering to dynamic note-taking needs.',
        screenshot:Note,
        demoLink:'https://online-note-book.herokuapp.com/',
        repoLink:'https://github.com/AraelT8/Notebook'
    },
    {
        title:'Employee Database',
        description: "This command-line application, built with JavaScript, MySQL, Inquirer, and Node.js, serves as an employee database solution. It empowers users to seamlessly input new data and edit existing information, offering a comprehensive tool for effective employee management. The app's primary objective is to provide users with a customizable and organized database to effortlessly track and tailor employee information according to their specific requirements.",
        screenshot: Database,
        demoLink:'https://drive.google.com/file/d/1qmkyZykbA7wLePsNph-tf2MlnfgjMX1U/view',
        repoLink:'https://github.com/AraelT8/Tracker-Database'
    },
    {
        title:'Online Commerce Back-End',
        description:"Powering an e-commerce website's backend, this application employs a dynamic Express.js API and Sequelize to seamlessly interface with a MySQL database. It enables users to flexibly customize the database by establishing a connection through an env file. By leveraging this setup, users can effortlessly adapt existing model and seed files to input pertinent data essential for their specific application requirements.",
        screenshot: Shop,
        demoLink:'https://drive.google.com/file/d/1M1e-F5GNAHeLyZ95emI_TaCSexHOGSK1/view',
        repoLink:'https://github.com/AraelT8/Online-Shop'
    },
    {
        title:'Weather-Teller',
        description:"The Weather-Teller app empowers users to swiftly access both current weather and a 5-day forecast for any chosen city. Addressing the need for weather insights, the app equips users to plan ahead and adapt to varying conditions. Constructed with HTML, CSS, JavaScript, and enriched with server-side OpenWeather API integration, the app delivers accurate and timely weather information to enhance users' preparedness.",
        screenshot: Weather,
        demoLink:'https://araelt8.github.io/Weather-Teller/',
        repoLink:'https://araelt8.github.io/Weather-Teller/'
    },
    {
        title:'Speed Quiz Game',
        description: "Crafted with HTML, CSS, JavaScript, jQuery, and a web API, the Script-Quiz exemplifies my prowess as a full-stack developer. Designed to showcase and apply my acquired skills, this quiz serves as a valuable resource for boot camp students and JavaScript enthusiasts alike. Participants are challenged with 12 multiple-choice questions within a time constraint of 60 seconds, fostering both learning and engagement. The quiz ensures progress tracking by recording users' scores.",
        screenshot: Quiz,
        demoLink:'https://araelt8.github.io/Script-Quiz/',
        repoLink:'https://github.com/AraelT8/Script-Quiz'
    },
  ];

  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-[#D3F9B5] to-[#989FCE] p-20'>
      <div className='mb-60'></div>
      <div className='max-w-[1000px] mx-auto'>
        <p name='Projects' className='text-5xl font-bold inline border-b-4 border-[#F2A65A] '>Projects</p>
        <div className='mb-12'></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-12'>
          {projects.map((project, index) => (
            <div key={index} className='flex flex-col items-center'>
              <h2 className='text-xl font-semibold text-[#393D3F] mb-2'>
                {project.title}
              </h2>
              <div className='mb-4'>
                <a
                  href={project.demoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='relative inline-block'>
                    <div className='w-[500px] h-[300px] object-cover rounded-lg shadow-lg bg-gradient-to-br from-[#D3F9B5] to-[#989FCE]'>
                      <img
                        src={project.screenshot}
                        alt={`Screenshot of ${project.title}`}
                        className='w-full h-full object-cover rounded-lg'
                      />
                    </div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 bg-gradient-to-br from-[#D3F9B5] to-[#989FCE] hover:opacity-70'></div>
                  </div>
                </a>
              </div>
              <p className='text-[#393D3F]'>{project.description}</p>
              <div className='flex mt-4 space-x-4'>
                <a
                  href={project.repoLink}
                  className='text-[#393D3F] border-2 border-[#393D3F] px-4 py-2 rounded-md transition-colors duration-300 bg-transparent hover:bg-[#393D3F] hover:text-white'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub Repo
                  <FaExternalLinkAlt className='ml-1 inline' />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className='mb-16'></div> 
      </div>
    </div>
  );
};

export default Projects;