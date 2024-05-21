import { NavBar } from "../navbar";

export function Heading() {
  return (
    <div className="flex-no-wrap flex w-full z-9999 h-[120px] bg-white fixed place-content-center top-0">
      <div>
        <img
          src={require("../../image/logo.png")}
          alt="logopasains"
          className="size-xsm my-[15px]"
        />
      </div>
      <div className="my-auto">
        <NavBar />
      </div>
      <div className="flex flex-row my-auto">
        <button className="ml-12 mr-6 w-24 h-14 bg-light-orange rounded-md text-md transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-bold-orange duration-300">
          Sign up
        </button>
        <button className="w-24 h-14 bg-light-orange rounded-md text-md transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-bold-orange duration-300">
          Log in
        </button>
      </div>
    </div>
  );
}
