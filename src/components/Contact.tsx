import React from "react";
import {
    FaBehance,
    FaDribbble,
    FaFacebook,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa";
const Contact = () => {
  return (
    <div className=" xs:h-[220vh] lg:h-[150vh] w-full bg-[url('/images/contact-bg.jpg')] relative flex justify-center items-center pt-14 lg:pb-20">
      <div className="absolute top-0 left-0 w-full xs:h-[220vh] lg:h-[150vh] bg-[#151515] opacity-[0.8] "></div>
      <div className=" flex justify-center items-center flex-col   lg:p-16   lg:max-w-[65%] absolute  ">
        <h3 className="text-[17px]   uppercase text-[#39b54a] font-mons font-bold text-center ">
          Contact Us
        </h3>
        <h1 className="lg:text-[44px]  font-bold  font-mons text-white text-center tracking-wide -leading-5">
          Reach out for a new project or just say hello
        </h1>

        <div className=" xs:w-[100vw] lg:max-w-7xl  flex  mt-20 xs:flex-col lg:flex-row gap-y-10">
          <div className="xs:w-full lg:w-[65%]  bg-blur xs:p-10 lg:p-[60px] flex flex-col gap-y-9 ">
            <div>
              <h3 className="font-mons text-[18px] leading-5 tracking-wider font-semibold">
                Send Us Message
              </h3>
            </div>

            <input
              placeholder="Your email"
              className="bg-transparent py-4 px-2 font-mons text-[#333333] uppercase tracking-wider leading-5 border-b border-[#333333]"
            />
            <input placeholder="Your Name" className="bg-transparent" />
            <textarea
              placeholder="Your Message"
              cols={40}
              rows={15}
              className="bg-transparent"
            />
            <button className="submit">Submit</button>
          </div>
          <div className="xs:w-full lg:w-[65%]  bg-[#111111] xs:p-10 lg:p-[60px]  ">
            
              <div className="flex ">
                <h3 className="font-mons text-[18px] leading-5 tracking-wider font-semibold">
                  Contact us
                </h3>
              </div>
              <div className="mt-7 flex gap-y-10 flex-col">
              <div>
                <h1 className="heading mb-2">
                  Where to Find Us
                </h1>
                <p className="para !text-[12px]">1600 Amphitheatre Parkway Mountain View, CA 94043 US</p>
              </div>
              <div>
                <h1 className="heading mb-2">Email Us At</h1>
                <p className="para !text-[12px]">contact@glintsite.com info@glintsite.com</p>
              </div>
              <div>
                <h1 className="heading mb-2">Call Us At</h1>
                <p className="para !text-[12px]">
                  Phone: (+63) 555 1212 Mobile: (+63) 555 0100 Fax: (+63) 555
                  010
                </p>
              </div>
            </div>
          <div className="flex gap-x-3 text-grey mt-7">
                      <FaFacebook size={20}/>
                      <FaInstagram size={20}/>
                      <FaTwitter size={20}/>
                      <FaDribbble size={20}/>
                    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
