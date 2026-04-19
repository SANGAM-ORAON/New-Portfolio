import React, { useEffect, useState } from 'react';
import { navLinks } from "../../constants/index.js";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // hide navbar
      } else {
        setShow(true); // show navbar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 w-full transition-transform duration-300 z-50 ${show ? "translate-y-0" : "-translate-y-full"}`}>
      <div>
        <ul className="navbar flex justify-center gap-5 shadow-md py-4 bg-black md:text-2xl md:gap-10 md:pt-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a className='hover:text-[#5a189a]' href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;