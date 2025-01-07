import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#111111]  xs:h-auto lg:h-[60vh] w-full flex justify-center items-center xs:flex-col lg:flex-row xs:mt-20 lg:mt-0 xs:pb-10 lg:pb-0 '>

        <div className='lg:max-w-6xl flex justify-evenly items-center w-full xs:gap-y-10 lg:gap-x-20 xs:flex-col lg:flex-row lg:gap-y-0'>
        <div className='lg:w-[50%] xs:px-6 xs:py-4 lg:py-0 lg:px-0'>
        <Image src={'/images/logo-footer.png'} width={100} height={100} alt='log' className='mb-4'/>
        <p className='para font-lora text-justify'>Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.</p>
      </div>
      <div className='xs:w-[100vw] lg:w-[50%] flex flex-col gap-y-3 xs:px-6 xs:py-4 lg:py-0 lg:px-0'>
        <h1 className='heading !text-white  '>Get Notified</h1>
        <p className='para text-justify'>Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.</p>
        <div>
            <input placeholder='Your Email'/><button className='submit !py-2 xs:mt-2 lg:mt-0'>Submit</button>
        </div>
      </div>
        </div>
     
    </div>
  )
}

export default Footer
