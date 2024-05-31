import { NavBar } from "../navbar";

export function Heading() {
  return (
    <div className="flex max-w-full justify-between z-9999 items-center px-[25px] bg-white mx-auto font-nunito container fixed top-0">
      <div>
        <img
          src={require("../../image/logo.png")}
          alt="logopasains"
          className="size-sm"
        />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
}
