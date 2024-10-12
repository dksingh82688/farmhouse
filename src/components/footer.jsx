import Link from "next/link";
import React from "react";

const footer = () => {
  return (
    <>
      <div className="w-full bg-black">
        <div className="max-w-[1240px] mx-auto ">
          <footer className=" text-white py-10 ">
            <div className="container mx-auto px-4">
              {/* Newsletter Section */}
              <div className="bg-green-500 p-4 flex justify-between items-center mb-6">
                <p className="text-white text-lg">
                  Customer sign up for our newsletter.
                </p>
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="p-2 rounded-l-md text-black hidden sm:block"
                  />
                  <button className="bg-white text-green-500 p-2 rounded-r-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a4 4 0 004.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                {/* Contact Info */}
                <div>
                  <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
                  <p>
                    Address: NO-7, Plot, Allied House, Block, Street Number 5, 6
                    LSC
                    <br />
                    Vasant Kunj, New Delhi, Delhi 110070{" "}
                  </p>
                  <p className="mt-2">Phone Numbers:</p>
                  <ul className="space-y-2 mt-2">
                    <li>+91 98101 50047</li>
                    <li>+91 98101 50047</li>
                    <li>+91 98101 50047</li>
                    <li>+91 98101 50047</li>
                  </ul>
                  <p className="mt-4">Emails:</p>
                  <ul>
                    <li>gitin@rpgestate.in</li>
                    <li>gitin@rpgestate.in</li>
                  </ul>
                  <p className="mt-4">
                    Website:{" "}
                    <a
                      href="https://www.farmhousesouthdelhi.com"
                      className="underline"
                    >
                      www.farmhousedelhi.com
                    </a>
                  </p>
                </div>

                {/* South Delhi Area */}
                <div>
                  <h2 className="text-xl font-bold mb-4">SOUTH DELHI AREA</h2>
                  <p>
                    <Link href=""></Link>
                    Delhi : Asola 1 & 2 , Bandh Road Ave 1-8 , Bhati ,
                    Chhatarpur , Chhatarpur DLF , Dera Mandi , Fatehpur Beri ,
                    Gadaipur , Ghitorni , Jaunapur , Mahabalipuram , MG Road CDR
                    Chowk to Aya Nagar , Mother Teresa , Pushpanjali ,
                    Radhemohan Drive , Sainik Farm , Satbari Ansal Villa ,
                    Sultanpur , Vasant Kunj , Westend Greens
                  </p>
                </div>

                {/* NCR Area */}
                <div>
                  <h2 className="text-xl font-bold mb-4">NCR AREA</h2>
                  <p>
                    Faridabad, Gurgaon (Badshahpur, Baliavas, DLF Farms
                    Bandhwari, Gwalpahari), Haryana (Faridabad, Sohna), Noida
                    (Greater Noida)
                  </p>
                </div>

                {/* Quick Contact Form */}
                <div>
                  <h2 className="text-xl font-bold mb-4">QUICK CONTACT</h2>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-2 text-black"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-2 text-black"
                    />
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      className="w-full p-2 text-black"
                    />
                    <textarea
                      placeholder="Message"
                      className="w-full p-2 text-black"
                    />
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white p-2 rounded"
                    >
                      Submit
                    </button>
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Property Id"
                        className="flex-grow p-2 text-black"
                      />
                      <button className="bg-green-500 text-white p-2 ml-2">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Footer Bottom Section */}
              <div className="flex justify-between items-center border-t border-gray-700 mt-8 pt-4">
                <p className="text-sm">
                  &copy; 2024 Farm House South Delhi - All rights reserved
                </p>
                <div className="flex space-x-4">
                  {/* Social Media Icons */}
                  <Link href="#" className="text-white">
                    <i className="fab fa-whatsapp"></i>
                  </Link>
                  <Link href="#" className="text-white">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#" className="text-white">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#" className="text-white">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link href="#" className="text-white">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default footer;
