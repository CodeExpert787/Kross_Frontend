"use client";
import { useState,  } from "react";
import React from 'react';
export default function Page() {
  
  const [searchTerm, setSearchTerm] = useState("")

  const clearSearch = () => {
    setSearchTerm("")
  }

  const partners = [
    { name: "Microsoft for Startups", logo: "/assets/image/partner/1.svg" },
    { name: "Google Cloud", logo: "/assets/image/partner/2.svg" },
    { name: "Google Cloud", logo: "/assets/image/partner/3.svg" },
    { name: "Google Cloud", logo: "/assets/image/partner/4.svg" },
    { name: "Google Cloud", logo: "/assets/image/partner/5.svg" },
    { name: "Google Cloud", logo: "/assets/image/partner/6.svg" },
    { name: "Google Cloud", logo: "/assets/image/partner/7.svg" },
    { name: "Google Cloud", logo: "/assets/image/partner/8.png" },
    { name: "Google Cloud", logo: "/assets/image/partner/9.png" }, 
    { name: "Google Cloud", logo: "/assets/image/partner/10.svg" },
    // ...add all partners
  ];

  return (
  <div className="min-h-screen w-full bg-gradient-to-b from-[#050026] to-[#110942] text-white font-sans  overflow-hidden">

    <section className="bg-[#050026]">
    <div className="container mx-auto px-2 sm:px-6 py-8 sm:py-[64px]">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-8">KROSS Partners</h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            KROSS is at the forefront of building the most inclusive and fastest <br/>growing ecosystem for real-world
            assets. Discover the global<br/> network of KROSS ecosystem partners and partners.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-8 sm:mb-20">
          <div className="relative w-full max-w-xs sm:max-w-lg">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-transparent border border-gray-600/40 rounded-lg text-white placeholder:text-gray-400 focus:border-purple-400 focus:outline-none text-base"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Partners Content Area - Currently empty as shown in image */}
        <div className=" px-2 sm:px-10">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 ">
            {partners.map((partner) => (
              <div key={partner.name} className=" h-[211px] bg-[#18123a] rounded-xl p-10 flex items-center justify-center">
                <img src={partner.logo} alt={partner.name} className="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      {/* Explore Ecosystem CTA (Pixel-perfect) */}
      <section className="text-white flex w-full bg-[#050026] border-b-4 border-white">
        
        <div className="flex w-full items-center relative justify-center py-10 sm:py-25 md:py-[133px]">
          <div className="flex flex-col items-center justify-center gap-8 sm:gap-[56px] w-full z-1">
            <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 flex gap-2 sm:gap-4">
              <div className="w-[250px] sm:w-[450px] md:w-[850px] h-[120px] sm:h-[250px] md:h-[450px] bg-[#EC34E0]/15 blur-3xl rounded-full"></div>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-full md:w-2/3 text-center z-10">Become a <br/>KROSS Partner</h1>
            <div className="z-10 inline-flex p-[2px] rounded-[12px] bg-gradient-to-l from-[#FF00B8] to-[#6D05B8] hover:bg-gradient-to-r transition-colors duration-200  inline-block">
              <a
                href="/contact"
                className="inline-flex px-8 py-4 rounded-[10px] bg-transparent hover:bg-gradient-to-r text-white font-medium hover:shadow-[inset_0_2px_12px_0_rgba(0,0,0,1)] transition-colors duration-200  inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
