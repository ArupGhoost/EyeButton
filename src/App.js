import React, { useState } from 'react';
import './App.css';
import Svg1 from './Svg1';

function App() {
   
  const [showletter, setShowLetter] = useState(false);

  const newFunction = () => {
    setShowLetter(!showletter)
  };

  return (
    <div className="App">
    <div className='relative'>
    <div className=' text-5xl lg:text-7xl text-indigo font-sans text-center pt-2 px-2 m-auto'> 
      <h1>Join Our Gaming Community</h1>
    </div>
    <div className='grid grid-cols-1 mb-2 pt-12 lg:grid-cols-2 lg:gap-4 lg:pt-16  md:grid-cols-2 md:gap-4 md:pt-24  sm:grid-cols-1 '>
      <div className='lg:pl-16'>
        <Svg1 />
      </div>

      <div className='text-center flex  justify-center items-center pt-8'>
        <form>

        <div>
          <label className='text-xl'>
          <span className='text-indigo'>Email</span>
          <div>
            <input type='text' placeholder='Email...' className='mt-1 border solid border-black  px-4 py-2 outline-none focus:border-indigo'/>
          </div>
          </label>
          </div>

          <div className='pt-5'>
          <label className='text-xl'>
          <span className='text-indigo'>PassWord</span>
          <div>
            <input type={showletter ? 'text' : 'password'} placeholder='PassWord...' className='mt-1 border px-4 py-2 outline-none solid border-black p-1 font-thin focus:border-indigo'/>
           
        
          </div>
          </label>
          </div>

          <div className='pt-3'>
             <button className='bg-indigo text-white py-2 px-8'>Join</button>
          </div>

        </form>
      
      </div>
     
     
     
      </div>
         
          <div className='absolute right-12 bottom-14 lg:right-44 lg:bottom-32 md:right-8'>
      <button onClick={newFunction}>{showletter ? 
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
       : 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        </svg>}</button>

      </div>
  </div>
    </div>
  );
}

export default App;

