import { NavBar } from "../navbar";

export function Heading() {
  return (
    <div className="flex flex-row max-w-full w-full bg-white fixed place-content-center">
      <div>
        <img
          src={require("../../image/lambang.jpg")}
          alt="logopasains"
          className="size-xsm mr-6 my-6"
        />
      </div>
      <div className="flex flex-col space-y-xsm">
        <h1 className="text-xl font-bold text-bold-orange mt-3">PASAINS </h1>
        <p className="text-black text-md font-normal">
          {"Unit Kegiatan Mahasiswa Pecinta Alam"} <br />
          <span>
            {
              "Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Gadjah Mada"
            }
          </span>
        </p>
      </div>
      <div>
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
