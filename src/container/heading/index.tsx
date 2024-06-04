import { NavBar } from "../navbar";
import React from "react";
import { Link } from "react-router-dom";

export const Heading: React.FC = () => {
  return (
    <div className="flex max-w-full justify-between z-9999 items-center px-[25px] max-[600px]:px-[10] bg-white mx-auto font-nunito container fixed top-0">
      <div>
      <Link to="/">
        <img
          src={require("../../image/logo.png")}
          alt="logopasains"
          className="size-sm hover:opacity-75 duration-150"
        />
      </Link>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};
