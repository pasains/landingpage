import { NavBar } from "../navbar";

export function Heading() {
  return (
    <div className="flex max-w-full justify-between items-center p-[25px] bg-white mx-auto font-nunito container fixed top-0">
      <div>
        <img
          src={require("../../image/logo.png")}
          alt="logopasains"
          className="size-xsm"
        />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
}
