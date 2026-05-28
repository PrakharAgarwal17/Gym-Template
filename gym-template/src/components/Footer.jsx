import React from "react";

import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import {
  IoLocationSharp,
  IoCall,
  IoMail,
} from "react-icons/io5";

import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer className="relative bg-[#0f0f0f] text-white overflow-hidden">

      {/* TOP BORDER GLOW */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-teal-500/10 blur-[160px]" />

      <div className="relative max-w-[1500px] mx-auto px-6 pt-20 pb-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* LOGO + DESC */}
          <div>
            <h1
              className="text-4xl font-black tracking-tight mb-5"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              IRON
              <span className="text-teal-400">FORGE</span>
            </h1>

            <p className="text-gray-400 leading-relaxed text-[15px] max-w-[300px]">
              Premium fitness sanctuary built for those who demand more.
              Strength. Discipline. Transformation.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">

              {/* INSTAGRAM */}
              <Link to={"https://instagram.com"}
                className="
                  group
                  w-11
                  h-11
                  rounded-full
                  bg-white/[0.04]
                  border
                  border-white/[0.06]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  hover:scale-110
                  hover:bg-gradient-to-br
                  hover:from-pink-500
                  hover:via-red-500
                  hover:to-yellow-400
                  hover:border-transparent
                "
              >
                <FaInstagram
                  size={18}
                  className="text-white/80 group-hover:text-white"
                />
              </Link>

              {/* TWITTER/X */}
              <Link to={"https://x.com"}
                className="
                  group
                  w-11
                  h-11
                  rounded-full
                  bg-white/[0.04]
                  border
                  border-white/[0.06]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  hover:scale-110
                  hover:bg-white
                  hover:border-white
                "
              >
                <FaXTwitter
                  size={18}
                  className="text-white/80 group-hover:text-black"
                />
              </Link>

              {/* YOUTUBE */}
              <Link
                to={"https://youtube.com"}
                className="
                  group
                  w-11
                  h-11
                  rounded-full
                  bg-white/[0.04]
                  border
                  border-white/[0.06]
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  hover:scale-110
                  hover:bg-red-600
                  hover:border-red-600
                "
              >
                <FaYoutube
                  size={18}
                  className="text-white/80 group-hover:text-white"
                />
              </Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-teal-400 font-semibold mb-6 tracking-[3px] text-sm">
              QUICK LINKS
            </h4>

            <div className="flex flex-col gap-4">
              {[
                "Membership Plans",
                "Our Programs",
                "Join Us",
                "Book a Trial",
              ].map((item) => (
                <a
                  key={item}
                  href="/"
                  className="
                    text-gray-300
                    hover:text-white
                    transition-all
                    duration-300
                    hover:translate-x-1
                    w-fit
                  "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-teal-400 font-semibold mb-6 tracking-[3px] text-sm">
              CONTACT US
            </h4>

            <div className="flex flex-col gap-5 text-gray-300">

              <div className="flex items-start gap-3">
                <IoLocationSharp
                  size={20}
                  className="text-teal-400 mt-1 shrink-0"
                />

                <div>
                  <p>45, Fitness Avenue</p>
                  <p>Gomti Nagar, Lucknow</p>
                </div>
              </div>

              <a
                href="tel:+918765432109"
                className="flex items-center gap-3 hover:text-teal-400 transition"
              >
                <IoCall
                  size={18}
                  className="text-teal-400"
                />

                +91 87654 32109
              </a>

              <a
                href="mailto:hello@ironforge.in"
                className="flex items-center gap-3 hover:text-teal-400 transition"
              >
                <IoMail
                  size={18}
                  className="text-teal-400"
                />

                hello@ironforge.in
              </a>
            </div>
          </div>

          {/* HOURS */}
          <div>
            <h4 className="text-teal-400 font-semibold mb-6 tracking-[3px] text-sm">
              GYM HOURS
            </h4>

            <div className="space-y-4 text-gray-300">

              <div className="flex justify-between border-b border-white/[0.05] pb-3">
                <span>Monday - Friday</span>
                <span className="text-white">24 Hours</span>
              </div>

              <div className="flex justify-between border-b border-white/[0.05] pb-3">
                <span>Saturday</span>
                <span className="text-white">24 Hours</span>
              </div>

              <div className="flex justify-between border-b border-white/[0.05] pb-3">
                <span>Sunday</span>
                <span className="text-white">24 Hours</span>
              </div>
            </div>

            {/* CTA BUTTON */}
            <button
              className="
                mt-8
                px-7
                py-3.5
                rounded-full
                bg-teal-500
                hover:bg-teal-400
                text-black
                font-semibold
                transition-all
                duration-500
                hover:scale-105
                shadow-[0_10px_40px_rgba(20,184,166,0.25)]
              "
            >
              Join Now
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="
            mt-20
            pt-7
            border-t
            border-white/[0.06]
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p className="text-sm text-gray-500">
            © 2026 IronForge Gym. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-600">
            Built for strength & performance.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;