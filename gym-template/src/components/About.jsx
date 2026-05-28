import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../components/Navbar.jsx";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current.children,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#f5f5f3]">

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/dv3nrazpl/video/upload/q_auto/f_auto/v1779918518/gym_ex_aa60dr.mp4" type="video/mp4" />
      </video>

      {/* DARK + LIGHT OVERLAY (Balanced for video) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />

      {/* Light Gradient Overlay (top to bottom) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f3]/30 via-transparent to-[#f5f5f3]/20 z-10" />

      <Navbar />

      {/* MAIN CONTENT */}
      <div className="relative z-20 max-w-[1500px] mx-auto px-6 min-h-screen flex items-center">
        
        <div ref={contentRef} className="grid md:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            
            <p className="uppercase tracking-[4px] text-teal-400 text-sm font-semibold">
              ABOUT IRON FORGE
            </p>

            <h1
              className="
                text-[42px]
                sm:text-[58px]
                md:text-[72px]
                lg:text-[82px]
                leading-[0.92]
                font-black
                uppercase
                text-white
                tracking-[-3px]
              "
            >
              BUILT FOR <br />
              <span className="text-teal-400">STRENGTH</span>
            </h1>

            <p className="text-white/90 leading-relaxed text-[17px] md:text-[18px] max-w-xl">
              A premium fitness sanctuary where discipline meets transformation. 
              Train harder, recover smarter, and become the strongest version of yourself.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 pt-6">
              
              <div>
                <h2 className="text-5xl font-black text-teal-400">10+</h2>
                <p className="text-white/80 mt-2 text-[15px]">Years of Excellence</p>
              </div>

              <div>
                <h2 className="text-5xl font-black text-teal-400">5K+</h2>
                <p className="text-white/80 mt-2 text-[15px]">Successful Transformations</p>
              </div>

              <div>
                <h2 className="text-5xl font-black text-teal-400">25+</h2>
                <p className="text-white/80 mt-2 text-[15px]">Expert Coaches</p>
              </div>

              <div>
                <h2 className="text-5xl font-black text-teal-400">24/7</h2>
                <p className="text-white/80 mt-2 text-[15px]">Access</p>
              </div>
            </div>

            {/* BUTTON */}
            <button
              className="
                mt-8
                bg-white
                hover:bg-gray-100
                text-[#111]
                px-12
                py-5
                rounded-2xl
                font-bold
                text-lg
                transition-all
                duration-300
                hover:scale-105
                shadow-xl
              "
            >
              
              EXPLORE OUR PROGRAMS →
            </button>
          </div>

          {/* RIGHT SIDE - Decorative / Empty for balance */}
          <div className="hidden md:block relative">
            <div className="absolute -right-10 top-20 w-80 h-80 border border-white/20 rounded-full" />
            <div className="absolute -right-20 bottom-32 w-52 h-52 border border-white/10 rounded-full" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;