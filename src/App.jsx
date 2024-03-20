import React from 'react'
import iconSupervisor from './images/icon-supervisor.svg'; 

import iconKarma from './images/icon-karma.svg'; 
import iconTeam from './images/icon-team-builder.svg'; 
import iconCalculator from './images/icon-calculator.svg'; 


function App() {
  return (
    <div>
      {/*  Headings */}
      <div className="text-center mt-8 ">
        <p className="text-4xl font-light text-neutral-very-dark-blue">Reliable, efficient delivery</p>
        <p className='text-4xl mt-2 font-semibold text-neutral-very-dark-blue'>Powered by Technology</p>
        <p className='text-sm mt-4  text-neutral-grayish-blue'>Our Artificial Intelligence powered tools use millions of project data <br></br> points
          to ensure that your project is successful</p>
      </div>
      {/* Left-Card */}
      <div className="flex flex-col lg:flex-row text-center gap-11 h-96 items-center justify-center lg:mt-20  mt-96">
        <div className=" w-80  p-5 text-left shadow-2xl  border-t-4 border-primary-cyan rounded-md">
          <h1 className='font-semibold text-xl'>Supervisor</h1>
          <p className='text-xs text-neutral-grayish-blue  mt-2'> Monitors activity to identify project <br></br>roadblocks</p>
          <img src={iconSupervisor} alt="" className='mt-10 ml-48' />
        </div>
        {/* Center-Cards */}
        <div className=" flex flex-col  gap-11 text-left">
          <div className=" w-80  p-5 shadow-2xl border-t-4 border-primary-red  rounded-md">
            <h1 className='font-semibold text-xl'> Team Builder</h1>
            <p className='text-xs text-neutral-grayish-blue  mt-2'>Scans our talent network to create the <br></br> optimal team for your project</p>
            <img src={iconTeam} alt="" className='mt-10 ml-48' />
          </div>
          <div className="w-80  p-5 shadow-2xl border-t-4 border-primary-orange rounded-md">
            <h1 className='font-semibold text-xl'> Karma</h1>
            <p className='text-xs text-neutral-grayish-blue  mt-2'> Regularly evaluates our talent to ensure <br></br> quality</p>
            <img src={iconKarma} alt="" className='mt-10 ml-48' />
          </div>
        </div>
        {/* Right-Card */}
        <div className="w-80 p-5 text-left shadow-2xl border-t-4 border-primary-blue rounded-md">
          <h1 className='font-semibold text-xl'> Calculator</h1>
          <p className='text-xs text-neutral-grayish-blue mt-2'>Uses data from past projects to provide <br></br> better delivery estimates</p>
          <img src={iconCalculator} alt="" className='mt-10 ml-48' />
        </div>
      </div>
    </div>
  )
}

export default App


