import { useState } from "react";
import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current + 20) {
        gsap.to(navRef.current, {
          y: -100,
          duration: 0.4,
          ease: "power2.out",
        });
      } else if (
        currentScrollY < lastScrollY.current - 20 ||
        currentScrollY < 50
      ) {
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-[#f5f3ef]/80
        backdrop-blur-md
        border-b
        border-black/[0.03]
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex items-center justify-between py-6">

          {/* LOGO */}
          <h1
            className="text-2xl font-semibold tracking-tight text-[#1a1a1a]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            IronForge
          </h1>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: "Home", link: "#home" },
              { name: "Join us", link: "#joinUs" },
              { name: "Programs", link: "#programs" },
              { name: "About Us", link: "#about" },
              { name: "Contact Us", link: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="
                  text-[15px]
                  text-[#3d3d3d]
                  font-medium
                  relative
                  transition-all
                  duration-300
                  hover:text-black
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[1px]
                  after:bg-black
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-[#1a1a1a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden pb-8 bg-[#f5f3ef]/95 backdrop-blur-xl">
            <div className="flex flex-col gap-6 text-center">

              {[
                { name: "Home", link: "#home" },
                { name: "Join us", link: "#joinUs" },
                { name: "Programs", link: "#programs" },
                { name: "About Us", link: "#about" },
                { name: "Contact Us", link: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    text-[#2a2a2a]
                    text-lg
                    font-medium
                    hover:text-black
                    transition
                  "
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;