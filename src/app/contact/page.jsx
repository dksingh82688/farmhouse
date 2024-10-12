"use client"
import React from 'react'
import Navbar from '@/components/navbar'
import Forms from '@/components/forms'
import Footer from '@/components/footer'
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling2,MdEmail  } from "react-icons/md";
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div className='py-[100px]'>
      <Navbar/>
      <div className="max-w-[1240px] mx-auto py-[20px] grid md:grid-cols-1 gap-4">
          <div className="grid grid-cols-1 p-4 md:p-0 md:grid-cols-2 py-[3px] md:py-[20px] gap-4">
            <div className="shadow-lg bg-white mx-0 md:mx-[100px] p-5 justify-center m-1">
             <Forms/>
            </div>
            <div className="py-[40px]">
              <h1 className="py-[10px] text-2xl font-medium uppercase flex items-center">
                <FaLocationDot className="mx-2" /> Head Office
              </h1>
              <span className="py-[10px] font-light p-2 grid items-center mx-2">
                Address: NO-7, Plot, Allied House, Block, Street Number 5, 6 LSC,
                Vasant Kunj, New Delhi, Delhi 110070
              </span>
              <div className="uppercase">
                <h1 className="text-2xl font-medium py-[15px] flex items-center">
                  <MdWifiCalling2 className="mx-2" /> Call Us Now
                </h1>
                <Link className="p-2 grid items-center mx-2" href="tel:+919810150047">
                  +919810150047
                </Link>
              </div>
              <div className="uppercase">
                <h1 className="text-2xl font-medium py-[15px] p-2 flex items-center">
                  <MdEmail className="mx-2" /> Email
                </h1>
                <Link
                  className="py-[10px] p-2 grid items-center mx-3"
                  href="mailto:gitin@rpgestate.in"
                >
                  gitin@rpgestate.in
                </Link>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14020.296237411312!2d77.1218422!3d28.5374936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d72cfbb0dfd%3A0x47c75cc4263a0a4a!2sRPG%20Estate!5e0!3m2!1sen!2sin!4v1713714005108!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer/>
      </>
  )
}

export default page
