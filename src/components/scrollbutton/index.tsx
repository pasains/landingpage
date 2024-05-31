import React, { useState } from 'react';
import { IoIosArrowDropup } from "react-icons/io";


export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-[120px] text-black right-[25px] transition hover:scale-125 duration-300 ${isVisible ? 'block' : 'hidden'}`}
    >
    <IoIosArrowDropup className="w-[45px] h-[45px]"/>
    </div>
  );
}


