import React, { useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div
      onClick={scrollToTop}
      className={`z-0 fixed bottom-10 md:bottom-[60px] text-light-orange right-4 md:right-6 transition hover:scale-125 ${isVisible ? "block" : "hidden"}`}
    >
      <IoIosArrowDropup className="w-11 h-11" />
    </div>
  );
}
