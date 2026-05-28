function Home() {
  return (
    <section className="w-full h-screen bg-[#f5f5f3] flex flex-col">

      {/* MAIN WRAPPER */}
      <div className="max-w-[1500px] mx-auto px-6 pt-16 pb-4 flex flex-col flex-1 min-h-0 w-full">

        {/* TOP TEXT */}
        <div className="flex flex-col items-center text-center shrink-0">

          <p className="uppercase tracking-[2px] text-[11px] md:text-[12px] font-semibold text-[#222] mb-1">
            Achieve Your Fitness Goals
          </p>

          <h1
            className="
              text-[38px]
              sm:text-[52px]
              md:text-[72px]
              lg:text-[88px]
              leading-[0.85]
              font-black
              uppercase
              text-[#111]
              tracking-[-3px]
              md:tracking-[-5px]
            "
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            FIND YOUR <br />
            STRENGTH
          </h1>
        </div>

        {/* MAIN CARD */}
       <div
  className="
    relative
    mt-3
    rounded-[36px]
    overflow-hidden
    bg-[#d9d9d4]

    h-[420px]
    sm:h-[500px]
    md:h-[620px]
    lg:h-[720px]

    mx-2
    md:mx-10
    lg:mx-20
  "
>

          {/* IMAGE */}
          <img
            src="https://res.cloudinary.com/dv3nrazpl/image/upload/q_auto/f_auto/v1779920979/ChatGPT_Image_May_28_2026_03_59_08_AM_om8t49.png"
            alt=""
           className="
  absolute
  inset-0
  w-full
  h-full
  object-cover
  object-center
"
          />

          {/* TOP LIGHT */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 z-10" />

          {/* RIGHT SIDE LIGHT */}
          <div className="absolute right-0 top-0 h-full w-[35%] bg-gradient-to-l from-white/30 to-transparent z-10" />

          {/* BOTTOM DARK FADE */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/30 to-transparent z-10" />

          {/* CENTER TEXT */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <h2
              className="
                text-white
                uppercase
                text-center
                leading-[0.86]
                font-black
                text-[36px]
                sm:text-[52px]
                md:text-[72px]
                lg:text-[90px]
                tracking-[-2px]
                md:tracking-[-4px]
              "
              style={{
                fontFamily: "'Anton', sans-serif",
                textShadow: "0 10px 40px rgba(0,0,0,0.18)",
              }}
            >
              INSIDE <br />
              AND OUT.
            </h2>
          </div>

          {/* BOTTOM LEFT CONTENT */}
          <div className="absolute bottom-6 left-6 z-20 max-w-[260px]">
            <p className="text-white/90 text-[13px] md:text-[15px] leading-relaxed">
              Build Strength.
            </p>
            <p className="text-white/90 text-[13px] md:text-[15px] leading-relaxed">
              Elevate Wellness.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;