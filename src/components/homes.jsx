import React from "react";

const home = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 p-3 md:grid-cols-4 py-[40px]  md:py-[50px] items-center justify-center gap-4 ">
          <div className="bg-white border border-black p-[8px] outline-none shadow-xl">
            <select
              id="countries"
              class=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-transparent"
            >
              <option selected>All Types</option>
              <option value="US">Farm House</option>
              <option value="CA">Mini Farm House</option>
              <option value="FR">Farm Villas</option>
              <option value="DE">Farm Lands</option>
              <option value="DE">Penthouse</option>
              <option value="DE">Kothi</option>
              <option value="DE">Mini Kothi</option>
              <option value="DE">Mini Villa</option>
              <option value="DE">Mini Plot</option>
              <option value="DE">Flats</option>
            </select>
          </div>
          <div className="bg-white border border-black p-[8px] outline-none shadow-xl">
            <select
              id="countries"
              class=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-transparent"
            >
              <option selected>All Cities</option>
              <option value="US">South Delhi</option>
            </select>
          </div>
          <div className="bg-white border border-black p-[8px] outline-none shadow-xl">
            <select
              id="countries"
              class=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-transparent"
            >
              <option selected>All Areas</option>
              <option value="US">Dera mandi</option>
              <option value="CA">Vasant Kunj</option>
              <option value="FR">Chhatarpur</option>
              <option value="DE">Chhatarpur DLF</option>
              <option selected>Mahabalipuram</option>
              <option value="US">Fatehpur Beri</option>
              <option value="CA">Gadaipur</option>
              <option value="FR">Ghitorni</option>
              <option value="DE"> Jaunapur</option>
              <option selected> MG Road CDR Chowk to Aya Nagar</option>
              <option value="US">Mother Teresa</option>
              <option value="CA">Pushpanjali</option>
              <option value="FR">Radhemohan Drive</option>
              <option value="DE">Sainik Farm</option>
              <option selected>Satbari Ansal Villa </option>
              <option value="US">Sultanpur</option>
              <option value="CA">Westend Greens</option>
            </select>
          </div>
          <div className="bg-white border border-black p-[8px] outline-none shadow-xl">
            <select
              id="countries"
              class=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-transparent"
            >
              <option selected>Any Beadrooms</option>
              <option value="US">1</option>
              <option value="CA">2</option>
              <option value="FR">3</option>
              <option value="DE">4</option>
              <option value="US">5</option>
              <option value="CA">6</option>
              <option value="FR">7</option>
              <option value="DE">8</option>
              <option value="FR">9</option>
              <option value="DE">10</option>
            </select>
          </div>
          <div className="bg-white border border-black p-[8px] outline-none shadow-xl">
            <select
              id="countries"
              class=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-transparent"
            >
              <option selected>Min Price</option>
              <option value="US">80cr</option>
              <option value="CA">70cr</option>
              <option value="FR">60cr</option>
              <option value="DE">50cr</option>
              <option value="US">40cr</option>
              <option value="CA">30cr</option>
              <option value="FR">20cr</option>
              <option value="DE">10cr</option>
              <option value="US">5cr</option>
              <option value="CA">1cr</option>
              <option value="FR">80Lakh</option>
              <option value="DE">70Lakh</option>
              <option value="US">60Lakh</option>
              <option value="CA">50Lakh</option>
              <option value="FR">40Lakh</option>
              <option value="DE">30Lakh</option>
              <option value="US">20Lakh</option>
              <option value="CA">10Lakh</option>
              <option value="FR">5Lakh</option>
              <option value="DE">1Lakh</option>
            </select>
          </div>
          <div className="bg-white border border-black p-[8px] outline-none shadow-xl">
            <select
              id="countries"
              class=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-transparent"
            >
              <option selected>Max Price</option>
              <option value="US">100cr</option>
              <option value="US">80cr</option>
              <option value="CA">70cr</option>
              <option value="FR">60cr</option>
              <option value="DE">50cr</option>
              <option value="US">40cr</option>
              <option value="CA">25cr</option>
              <option value="FR">20cr</option>
              <option value="DE">10cr</option>
              <option value="US">5cr</option>
              <option value="CA">1cr</option>
              <option value="FR">80Lakh</option>
              <option value="DE">70Lakh</option>
              <option value="US">60Lakh</option>
              <option value="CA">50Lakh</option>
              <option value="FR">40Lakh</option>
              <option value="DE">30Lakh</option>
              <option value="US">20Lakh</option>
              <option value="CA">10Lakh</option>
              <option value="FR">5Lakh</option>
              <option value="DE">1Lakh</option>
              <option value="FR">60k</option>
              <option value="DE">80k</option>
            </select>
          </div>
          <div className="bg-white border border-black p-[8px] outline-none shadow-xl">
            <select
              id="countries"
              class=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-transparent"
            >
               <option selected>All</option>
              <option value="US">For Buy/Sale</option>
              <option value="CA">For Rent</option>
            </select>
          </div>
          <button className="p-4 bg-green-500 text-white uppercase">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default home;
