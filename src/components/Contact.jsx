import React from 'react';

const Contact = () => {
  return (
    <div name='Contact' className='w-full min-h-screen bg-gradient-to-t from-[#D3F9B5] to-[#989FCE] p-6 md:p-60'>
      <div className='max-w-[1000px] mx-auto'>
        <div className='flex flex-col items-center justify-center h-full'>
          <form
            method='POST'
            action='https://getform.io/f/23d37a6b-5435-44d8-afd2-fa1cab2b330e'
            className='w-full bg-white p-4 md:p-6 rounded-lg shadow-md'
          >
            <div className='pb-6'>
              <p className='text-2xl md:text-4xl font-bold inline border-b-4 border-[#F2A65A] text-[#393D3F]'>
                Contact
              </p>
              <p className='text-[#393D3F] py-2 md:py-4'>
                Submit the form below or send an email - araeltiejerina@gmail.com
              </p>
            </div>
            <input
              className='p-2 mb-2 md:mb-4 rounded-md w-full'
              type='text'
              placeholder='Name'
              name='name'
            />
            <input
              className='p-2 mb-2 md:mb-4 rounded-md w-full'
              type='email'
              placeholder='Email'
              name='email'
            />
            <textarea
              className='p-2 mb-2 md:mb-4 rounded-md w-full'
              name='message'
              rows='5'
              placeholder='Message'
            ></textarea>
            <button className='text-white border-2 hover:bg-blue-400 hover:border-blue-400 px-4 py-3 mx-auto bg-[#393D3F] rounded-md transition-colors duration-300'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
