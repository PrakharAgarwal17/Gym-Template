import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../components/Navbar.jsx";

gsap.registerPlugin(ScrollTrigger);

function Plans() {
  const [billing, setBilling] = useState('monthly');
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 75%" }
      }
    );

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 100, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.2,           // Fast animation
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 82%",      // Jaldi trigger
            delay: index * 0.04    // Bahut kam delay (almost instant)
          }
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const handleToggle = (type) => {
    setBilling(type);
  };

  const plans = [
    {
      name: "STARTER",
      monthly: 59,
      yearly: 599,
      popular: false,
      features: ["Gym Access", "Group Classes", "Basic App Access", "Locker Access"]
    },
    {
      name: "PREMIUM",
      monthly: 99,
      yearly: 999,
      popular: true,
      features: ["All Starter Features", "2 PT Sessions/Month", "Nutrition Plan", "Unlimited Classes", "Sauna & Steam"]
    },
    {
      name: "ELITE",
      monthly: 149,
      yearly: 1499,
      popular: false,
      features: ["All Premium Features", "Unlimited PT Sessions", "VIP Locker + Towels", "Guest Passes", "Personal Dietitian"]
    }
  ];

  return (
    <section className="w-full min-h-screen relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/dv3nrazpl/image/upload/q_auto/f_auto/v1780146834/gym_helper_cz8ki9.png" 
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 pt-20 pb-24">

        {/* TOP TEXT */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[3px] text-[11px] md:text-[13px] font-semibold text-white mb-2">
            MEMBERSHIP PLANS
          </p>
          <h1 
            ref={headingRef}
            className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[82px] leading-[0.9] font-black uppercase text-white tracking-[-3px] md:tracking-[-5px]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            CHOOSE YOUR PLAN
          </h1>
          <p className="mt-5 text-white/90 text-[17px] max-w-2xl mx-auto">
            Flexible plans designed for every fitness level and goal
          </p>
        </div>

        {/* BILLING TOGGLE */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-1.5 shadow-xl flex items-center">
            <button
              onClick={() => handleToggle('monthly')}
              className={`px-10 py-3.5 rounded-2xl font-semibold transition-all ${billing === 'monthly' ? 'bg-[#111] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleToggle('yearly')}
              className={`px-10 py-3.5 rounded-2xl font-semibold transition-all ${billing === 'yearly' ? 'bg-[#111] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Yearly <span className="text-green-500 text-xs ml-1">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* PLANS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const price = billing === 'monthly' ? plan.monthly : Math.floor(plan.yearly / 12);
            const totalYearly = billing === 'yearly' ? plan.yearly : null;

            return (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className={`relative rounded-[32px] overflow-hidden bg-white shadow-2xl h-full flex flex-col transition-all duration-500 hover:-translate-y-4 group ${plan.popular ? 'scale-[1.04] ring-2 ring-teal-400' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold tracking-widest px-8 py-2 rounded-2xl shadow-lg z-10">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-10 flex flex-col h-full relative z-10">
                  <h3 className="text-3xl font-black uppercase tracking-tight text-[#111]">{plan.name}</h3>

                  <div className="mt-8 flex items-end gap-1">
                    <span className="text-6xl font-black text-[#111]">${price}</span>
                    <span className="text-gray-500 pb-2">/month</span>
                  </div>

                  {billing === 'yearly' && (
                    <p className="text-green-600 text-sm mt-1">${totalYearly} billed yearly</p>
                  )}

                  <ul className="mt-10 space-y-4 flex-1 text-gray-700">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-teal-600 text-xl">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-5 rounded-2xl font-bold text-lg mt-auto transition-all active:scale-95
                      ${plan.popular 
                        ? 'bg-teal-600 text-white hover:bg-teal-700' 
                        : 'bg-[#111] text-white hover:bg-black'}`}
                  >
                    {plan.popular ? 'JOIN PREMIUM' : 'GET STARTED'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-white/70 mt-16 text-sm">
          All plans include 7-day free trial • Cancel anytime • No hidden charges
        </p>
      </div>
    </section>
  );
}

export default Plans;