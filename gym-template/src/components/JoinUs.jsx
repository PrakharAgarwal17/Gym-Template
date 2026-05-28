import React from 'react';
import Navbar from "../components/Navbar.jsx";

function JoinUs() {
  return (
    <section className="w-full h-screen bg-[#e5e5d9] overflow-hidden flex flex-col">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN WRAPPER */}
      <div className="max-w-[1500px] mx-auto px-6 pt-16 pb-6 flex flex-col flex-1 min-h-0 w-full">

        {/* TOP TEXT */}
        <div className="flex flex-col items-center text-center shrink-0 mb-8">
          <p className="uppercase tracking-[3px] text-[11px] md:text-[13px] font-semibold text-[#222] mb-2">
            START YOUR TRANSFORMATION TODAY
          </p>

          <h1
            className="
              text-[36px]
              sm:text-[48px]
              md:text-[62px]
              lg:text-[72px]
              leading-[0.9]
              font-black
              uppercase
              text-[#111]
              tracking-[-2px]
              md:tracking-[-4px]
            "
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            JOIN US
          </h1>

          <p className="mt-4 max-w-2xl text-[#444] text-[15px] md:text-[17px] leading-relaxed px-4">
            Train with the best equipment. Learn from expert coaches.<br />
            Become stronger — inside and out.
          </p>
        </div>

        {/* THREE IMAGE CARDS */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-0">

          {/* Card 1 - Free Weights */}
          <div className="relative rounded-[32px] hover:scale-105 transition-all overflow-hidden h-full group shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
              alt="Free Weights"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
            
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white/90 text-sm tracking-widest">FREE WEIGHTS ZONE</p>
              <h3 className="text-white text-3xl font-black tracking-tight">POWERLIFTING</h3>
            </div>
          </div>

          {/* Card 2 - Cardio + Machines */}
          <div className="relative rounded-[32px] hover:scale-105 transition-all overflow-hidden h-full group shadow-xl">
            <img
              src="https://res.cloudinary.com/dv3nrazpl/image/upload/q_auto/f_auto/v1779986330/cardioMachine_awyp4t.jpg"
              alt="Cardio Machines"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
            
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white/90 text-sm tracking-widest">CARDIO & MACHINES</p>
              <h3 className="text-white text-3xl font-black tracking-tight">ENDURANCE</h3>
            </div>
          </div>

          {/* Card 3 - Functional Training */}
          <div className="relative rounded-[32px] hover:scale-105 transition-all overflow-hidden h-full group shadow-xl">
            <img
              src="https://res.cloudinary.com/dv3nrazpl/image/upload/q_auto/f_auto/v1779986571/funcArea_pwbcvn.png"
              alt="Functional Training"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
            
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-white/90 text-sm tracking-widest">FUNCTIONAL AREA</p>
              <h3 className="text-white text-3xl font-black tracking-tight">CROSSFIT</h3>
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}

export default JoinUs;