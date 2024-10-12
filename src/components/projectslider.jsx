"use client"
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules add slider auto play 
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";


const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      imageUrl: '/1.png',
      title: 'Farm House Built Area 1250 SQ. FT.',
      price: '₹21cr',
      location: 'Satbari Ansal Villa, New Delhi',
      size: '1650 SQ. YRD.',
      bedrooms: 5,
      bathrooms: 6,
    },
    // Add other properties here...
  ];

  return (
    <>
    <section className="max-w-[1240px] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Delhi Featured Properties</h2>
      
      <Swiper
      className="mySwiper   hidden md:bg-none "
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      modules={[ Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // Default for mobile
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }, // Show 4 slides on desktop
        }}
        
        navigation={true}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src={property.imageUrl}
                alt={property.title}
                width={400}
                height={300}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600">{property.location}</p>
                <p className="font-bold text-lg">{property.price}</p>
                <div className="flex justify-between items-center mt-4">
                  <span>{property.size}</span>
                  <span>{property.bedrooms} BHK</span>
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          
        ))}
          {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src={property.imageUrl}
                alt={property.title}
                width={400}
                height={300}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600">{property.location}</p>
                <p className="font-bold text-lg">{property.price}</p>
                <div className="flex justify-between items-center mt-4">
                  <span>{property.size}</span>
                  <span>{property.bedrooms} BHK</span>
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          
        ))}
          {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src={property.imageUrl}
                alt={property.title}
                width={400}
                height={300}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600">{property.location}</p>
                <p className="font-bold text-lg">{property.price}</p>
                <div className="flex justify-between items-center mt-4">
                  <span>{property.size}</span>
                  <span>{property.bedrooms} BHK</span>
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          
        ))}
          {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src={property.imageUrl}
                alt={property.title}
                width={400}
                height={300}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600">{property.location}</p>
                <p className="font-bold text-lg">{property.price}</p>
                <div className="flex justify-between items-center mt-4">
                  <span>{property.size}</span>
                  <span>{property.bedrooms} BHK</span>
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          
        ))}
         {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <Image
                src={property.imageUrl}
                alt={property.title}
                width={400}
                height={300}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600">{property.location}</p>
                <p className="font-bold text-lg">{property.price}</p>
                <div className="flex justify-between items-center mt-4">
                  <span>{property.size}</span>
                  <span>{property.bedrooms} BHK</span>
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          
        ))}
      </Swiper>
    </section>
    </>
  );
};

export default FeaturedProperties;
