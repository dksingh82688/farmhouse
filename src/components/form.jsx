import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800">
        <span className="text-black">CONTACT </span>
        <span className="text-green-600">US</span>
      </h2>
      <div className="w-16 border-b-4 border-green-600 mt-2 mb-6"></div>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border border-slate-400  hover:border-slate-800 p-2 col-span-3 md:col-span-1"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-slate-400  hover:border-slate-800 p-2 col-span-3 md:col-span-1"
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="border border-slate-400  hover:border-slate-800 p-3 col-span-3 md:col-span-1"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="border border-slate-400  hover:border-slate-800 p-3 col-span-3"
        ></textarea>
        <button className="bg-black text-white py-2 px-4 col-span-3 md:col-span-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
