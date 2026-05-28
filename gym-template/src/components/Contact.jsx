import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../components/Navbar.jsx";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // Heading Animation
    gsap.fromTo(".contact-heading",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 75%",
        }
      }
    );

    // Form Fields Animation
    gsap.fromTo(formRef.current?.children || [],
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        }
      }
    );

    // Info Section Animation
    gsap.fromTo(infoRef.current?.children || [],
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
        }
      }
    );

    // Cleanup
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#f5f5f3] overflow-hidden">

      <Navbar />

      <div className="max-w-[1500px] mx-auto px-6 pt-20 pb-16">

        {/* TOP TEXT */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[3px] text-[11px] md:text-[13px] font-semibold text-[#222] mb-2">
            GET IN TOUCH
          </p>
          <h1 
            className="contact-heading text-[42px] sm:text-[56px] md:text-[72px] lg:text-[82px] leading-[0.9] font-black uppercase text-[#111] tracking-[-3px] md:tracking-[-5px]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            LET'S BUILD<br />YOUR STRENGTH
          </h1>
          <p className="mt-4 text-[#444] text-[17px] max-w-2xl mx-auto">
            Have questions? Want to join? Drop us a message and our team will connect with you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* CONTACT FORM */}
          <div ref={formRef} className="bg-white rounded-[32px] p-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-8">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" 
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-teal-500 outline-none transition" />
                <input type="text" placeholder="Last Name" 
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-teal-500 outline-none transition" />
              </div>

              <input type="email" placeholder="Email Address" 
                className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-teal-500 outline-none transition" />

              <input type="tel" placeholder="Phone Number" 
                className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-teal-500 outline-none transition" />

              <textarea placeholder="Tell us what you're looking for (Membership, Trial, Corporate, etc.)" 
                rows="5"
                className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-teal-500 outline-none resize-y transition" />

              <button type="submit"
                className="w-full bg-[#111] hover:bg-black text-white py-5 rounded-2xl font-bold text-lg transition active:scale-95 mt-4">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div ref={infoRef} className="space-y-10 pt-6">
            <div>
              <h4 className="text-teal-600 font-semibold tracking-widest text-sm mb-3">VISIT OUR GYM</h4>
              <p className="text-2xl font-semibold leading-tight">
                Iron Forge Gym<br />
                45, Fitness Avenue<br />
                Gomti Nagar, Lucknow
              </p>
              <p className="text-gray-500 mt-4">Open 24 Hours • 7 Days a Week</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-teal-600 font-semibold tracking-widest text-sm mb-3">CALL US</h4>
                <a href="tel:+918765432109" className="text-2xl font-semibold hover:text-teal-600 transition">
                  +91 87654 32109
                </a>
              </div>
              <div>
                <h4 className="text-teal-600 font-semibold tracking-widest text-sm mb-3">EMAIL US</h4>
                <a href="mailto:hello@ironforge.in" className="text-2xl font-semibold hover:text-teal-600 transition">
                  hello@ironforge.in
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-teal-600 font-semibold tracking-widest text-sm mb-4">QUICK LINKS</h4>
              <div className="flex flex-wrap gap-3">
                {['Book a Trial', 'Membership Plans', 'Programs', 'Corporate Wellness'].map((link, i) => (
                  <a key={i} href="#" className="bg-white px-6 py-3 rounded-2xl text-sm font-medium hover:bg-teal-50 transition">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;