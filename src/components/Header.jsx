import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logoAtas.png";

export default function Header() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`w-screen h-14 fixed top-0 flex justify-between items-center px-4 ${
        navScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <img src={Logo} alt="" width={75} />
      </div>
      <div
        className={`sm:flex hidden mx-auto my-auto text-base ${
          navScrolled ? "text-black" : "text-white"
        } pr-20`}
      >
        <a href="#" className="hover:text-black hover:opacity-60 px-2 py-1">
          Home
        </a>
        <a href="#" className="hover:text-black hover:opacity-60 px-2 py-1">
          Products
        </a>
        <a href="#" className="hover:text-black hover:opacity-60 px-2 py-1">
          About
        </a>
        <button className="hover:text-black hover:opacity-60 rounded-md px-2 py-1">
          Contacts
        </button>
      </div>
      <div className="min-[415px]:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-black hover:opacity-60 px-2 py-1"
        >
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faCircleXmark} size="xl" className="mr-5" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="xl" className="mr-5" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="min-[415px]:hidden absolute top-14 right-12 w-screen bg-white rounded-xl w-20 text-start ">
          <ul className="text-base py-2">
            <li className="px-3 py-2">
              <a href="#" className="hover:text-black hover:opacity-60">
                Home
              </a>
            </li>
            <li className="px-3 py-2">
              <a href="#" className="hover:text-black hover:opacity-60">
                Products
              </a>
            </li>
            <li className="px-3 py-2">
              <a href="#" className="hover:text-black hover:opacity-60">
                About
              </a>
            </li>
            <li className="px-3 py-2">
              <button className="hover:text-black hover:opacity-60">
                Contacts
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
