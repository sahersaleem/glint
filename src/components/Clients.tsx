import React from 'react'

const Clients = () => {
  return (
    <div className='w-full h-auto bg-[#39b54a] flex flex-col justify-center items-center gap-y-9 py-6 pt-24 pb-24 xs:px-10 lg:px-0'>
        <div className='border-b border-grey2 xs:pb-4 lg:pb-10'>
      <h3 className='xs:text-xs lg:text-[17px]  uppercase text-black font-mons font-bold text-center leading-snug tracking-widest'>Hello There</h3>
      <h1 className='xs:text-[28px] lg:text-[72px]  font-bold tracking-[-0.1] font-mons'>We Are Glint</h1></div>
      <p className='w-[100%] lg:w-[65%] xs:text-[20px] lg:text-[22px] xs:leading-8 lg:leading-10  text-[#010507] text-center font-lora font-normal tracking-wider '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
      <div className='flex xs:flex-col lg:flex-row '>
      <div className='xs:border-b lg:border-r xs:py-6 border-grey2 lg:px-10 '><h1 className='text-[84px] font-mons font-semibold text-center -tracking-tighter' >127</h1><p className='text-[#010507] font-mons text-lg font-bold text-center'>Awards Received</p></div>
      <div className='xs:border-b lg:border-r xs:py-6 border-grey2 lg:px-10'><h1 className='text-[84px] font-mons font-semibold text-center -tracking-tighter' >1505</h1><p className='text-[#010507] font-mons text-lg font-bold text-center'>Cups of Coffee</p></div> 
      <div className='xs:border-b lg:border-r xs:py-6 border-grey2 lg:px-10'><h1 className='text-[84px] font-mons font-semibold text-center -tracking-tighter' >109</h1><p className='text-[#010507] font-mons text-lg font-bold text-center'>Happy Clients</p></div>
      <div className='xs:border-b lg:border-r xs:py-6 border-grey2 lg:px-10'><h1 className='text-[84px] font-mons font-semibold text-center -tracking-tighter' >102</h1><p className='text-[#010507] font-mons text-lg font-bold text-center'>Projects Completed</p></div>
      </div>
    </div>
  )
}

export default Clients
