import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const Heading: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const listNavbar = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Organization",
      link: "/organization",
    },
    {
      id: 4,
      title: "Galleries",
      link: "/galleries",
    },
    {
      id: 5,
      title: "Contact",
      link: "/contactus",
    },
  ];

  return (
    <div
      className={`w-full fixed top-0 z-10 ${isScroll ? "bg-white" : "bg-transparent"} ${isOpen ? "bg-white" : "bg-transparent"}`}
    >
      <div className="mx-auto p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={require("../../image/logo-pasains.png")}
                alt="logopasains"
                className="size-16 w-fit hover:opacity-75"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {listNavbar.map((item) => (
                <NavLink key={item.id} to={item.link}>
                  <div className="text-md font-semibold font-nunito hover:scale-110 hover:opacity-75">
                    {item.title}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
          <div onClick={toggleMenu} className="block md:hidden">
            <TfiMenu className="size-8" />
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        {listNavbar.map((item) => (
          <NavLink key={item.id} to={item.link}>
            <div className="block duration-300 px-4 mb-2 hover:opacity-75">
              {item.title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Heading;
