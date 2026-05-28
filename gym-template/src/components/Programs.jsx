import React, {useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../components/Navbar.jsx";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Plans() {
  const [billing, setBilling] = useState('monthly');
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const toggleRef = useRef(null);
  const cardsRef = useRef([]);

  // GSAP + ScrollTrigger Animations
  useEffect(() => {
    // Heading Animation on Scroll
    gsap.fromTo(headingRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cards Animation with ScrollTrigger
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 120, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
            delay: index * 0.1
          }
        }
      );
    });

    // Cleanup
    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  const handleToggle = (type) => {
    if (type === billing) return;

    gsap.to(toggleRef.current, {
      x: type === 'yearly' ? 0 : -4,
      duration: 0.4,
      ease: "power2.inOut"
    });

    setBilling(type);
  };

  const plans = [
    {
      name: "STARTER",
      monthly: 59,
      yearly: 599,
      color: "gray",
      features: ["Gym Access", "Group Classes", "Basic App Access", "Locker Access"]
    },
    {
      name: "PREMIUM",
      monthly: 99,
      yearly: 999,
      popular: true,
      color: "teal",
      features: ["All Starter Features", "2 PT Sessions/Month", "Nutrition Plan", "Unlimited Classes", "Sauna & Steam"]
    },
    {
      name: "ELITE",
      monthly: 149,
      yearly: 1599,
      color: "black",
      features: ["All Premium Features", "Unlimited PT Sessions", "VIP Locker + Towels", "Guest Passes", "Personal Dietitian"]
    }
  ];

  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-[#f5f5f3] flex flex-col">

      <Navbar />

      <div className="max-w-[1500px] mx-auto px-6 pt-16 pb-20 flex flex-col flex-1 w-full">

        {/* TOP TEXT */}
        <div className="flex flex-col items-center text-center mb-12">
          <p className="uppercase tracking-[3px] text-[11px] md:text-[13px] font-semibold text-[#222] mb-2">
            MEMBERSHIP PLANS
          </p>

          <h1 
            ref={headingRef}
            className="text-[38px] sm:text-[52px] md:text-[72px] lg:text-[82px] leading-[0.9] font-black uppercase text-[#111] tracking-[-3px] md:tracking-[-5px]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            CHOOSE YOUR PLAN
          </h1>

          <p className="mt-4 text-[#444] text-[16px] max-w-xl">
            Flexible plans designed for every fitness level
          </p>
        </div>

        {/* BILLING TOGGLE */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-3xl p-1.5 shadow-sm flex items-center">
            <button
              onClick={() => handleToggle('monthly')}
              className={`px-8 py-3 rounded-2xl font-semibold transition-all ${billing === 'monthly' ? 'bg-[#111] text-white' : 'text-gray-600'}`}
            >
              Monthly
            </button>

            <button
              onClick={() => handleToggle('yearly')}
              className={`px-8 py-3 rounded-2xl font-semibold transition-all ${billing === 'yearly' ? 'bg-[#111] text-white' : 'text-gray-600'}`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* PLANS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const price = billing === 'monthly' ? plan.monthly : Math.floor(plan.yearly / 12);
            const totalYearly = billing === 'yearly' ? plan.yearly : null;

            return (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className={`relative rounded-[32px] overflow-hidden bg-white shadow-xl h-full flex flex-col transition-all duration-500 hover:-translate-y-3 ${plan.popular ? 'scale-105 ring-2 ring-teal-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold tracking-widest px-8 py-2 rounded-2xl">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8 pb-6">
                  <h3 className="text-3xl font-black uppercase tracking-tight text-[#111]">{plan.name}</h3>
                  
                  <div className="mt-6 flex items-end gap-1">
                    <span className="text-6xl font-black">${price}</span>
                    <span className="text-gray-500 pb-2">/month</span>
                  </div>

                  {billing === 'yearly' && (
                    <p className="text-green-600 text-sm mt-1">${totalYearly} billed yearly</p>
                  )}
                </div>

                <div className="flex-1 px-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[15px]">
                        <span className="text-teal-600 text-xl">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-6 mt-auto">
                  <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all active:scale-95
                    ${plan.popular 
                      ? 'bg-teal-600 text-white hover:bg-teal-700' 
                      : 'bg-[#111] text-white hover:bg-black'}`}>
                    {plan.popular ? 'JOIN PREMIUM' : 'GET STARTED'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 mt-12 text-sm">
          All plans include 7-day free trial • Cancel anytime • GST included
        </p>
      </div>
    </section>
  );
}

export default Plans;