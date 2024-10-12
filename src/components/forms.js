"use client"
import React, { useRef } from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";


const Forms = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const textareaRef = useRef();
 

  const clearForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    textareaRef.current.value = "";
    
  };

  return (
    <>
      <form
        className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full"
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          await handleSubmit(formData);
          clearForm();
        }}
        method="POST"
      >
       <div className='grid gap-0'>
                  <h1 className='text-xl font-serif py-2'>Get in Touch</h1>
                  
                  {/* Name Input */}
                  <div className="flex items-center border border-slate-400 py-3 px-2 hover:border-slate-800 bg-transparent m-1">
                    <input
                      className='flex-1 bg-transparent focus:outline-none' required
                      type="text"
                      placeholder='Name' id='name' name='name'
                      ref={nameRef}
                    />
                    <span className="text-black pr-[5px] flex justify-end items-center">
                      <FaUser />
                    </span>
                  </div>

                  {/* Email Input */}
                  <div className="flex items-center border border-slate-400 py-3 m-1 px-2 hover:border-slate-800 bg-transparent">
                    <input
                      className='flex-1 bg-transparent focus:outline-none' required
                      type="email"
                      placeholder='Email' id='email' name='email'
                      ref={emailRef}
                    />
                    <span className="text-black pr-[5px]">
                      <MdEmail />
                    </span>
                  </div>

                  {/* Phone Number Input */}
                  <div className="flex items-center border border-slate-400 py-3 px-2 hover:border-slate-800 bg-transparent m-1">
                    <input
                      className='flex-1 bg-transparent focus:outline-none' required
                      type="tel"
                      placeholder='Phone Number' id='phone' name='phone'
                      ref={phoneRef}
                    />
                    <span className="text-black pr-[5px]">
                      <FaPhoneAlt />
                    </span>
                  </div>

                  {/* TextArea */}
                  <div className="flex items-center border border-slate-400 py-3 px-2 hover:border-slate-800 bg-transparent m-1">
                    <textarea
                      className='flex-1 bg-transparent focus:outline-none' required
                      placeholder='Message' id='textarea' name='textarea'
                      ref={textareaRef}
                    />
                    <span className="text-black pr-[5px]">
                      <FaPen />
                    </span>
                  </div>
                </div>
                <div className='text-center py-[10px] text-white p-2'>
                  <button className='bg-black px-10 p-3 hover:shadow-xl'>Submit</button>
                </div>
              </form>
            
            
    </>
  );
};

export default Forms;
