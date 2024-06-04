import React from "react";
import { GiHiking } from "react-icons/gi";
import { Layout } from "../layout";
import { NavLink } from "react-router-dom";
import useHome from "../hooks/home/index";
import { GiMountainClimbing } from "react-icons/gi";
import { BsFillTreeFill } from "react-icons/bs";
import RefreshTop from "../components/refreshtop";

export function Home() {
  const { totalPages, nextPage, prevPage, title, page } = useHome();

  return (
    <Layout>
      <RefreshTop />
      <div className="font-nunito scroll-smooth focus:scroll-auto">
        <div className="pt-[90px] max-w-full justify-items-center mx-auto text-center">
          <section className="bg-gunung bg-center place-content-center h-[640px] mx-auto max-w-full">
            <div className="bg-black bg-opacity-40 h-[640px] mx-auto place-content-center max-w-full">
              <h1 className="text-2xl text-white font-bold leading-tight tracking-widest">
                NEVER ENDING <br />
                <span> BROTHERHOOD</span>
              </h1>
            </div>
          </section>
          <section className="bg-pattren">
            <div className="container w-[1000px] p-[50px] mx-auto place-content-center bg-white">
              <div className="contaier border font-normal p-[25px] md:w-[600px] text-md text-justify mx-auto tracking-wide">
                Selamat datang di situs web resmi PASAINS, wadah bagi para
                mahasiswa dan mahasiswi Fakultas Matematika dan Ilmu Pengetahuan
                Alam Universitas Gadjah Mada yang memiliki semangat tinggi dalam
                menjaga dan menjelajahi keindahan alam.
              </div>
              <div className="text-lg mt-[100px] mb-[5px] tracking-wider font-extrabold text-light-orange">
                ALUR PENDIDIKAN
              </div>
              <p className="font-normal opacity-65 mb-[15px] text-md">
                Tahapan pendidikan calon anggota PASAINS
              </p>
              <div className="border border-light-orange w-[100px] mx-auto place-content-center"></div>
              <div className="flex flex-cols mt-[40px] mb-[80px] container items-center place-content-center mx-auto gap-[230px] w-full">
                <div className="space-y-[10px] w-[200px] ">
                  <GiHiking className="size-[90px] hover:opacity-75 hover:scale-110  fill-light-orange place-content-center mx-auto" />
                  <div className="text-md font-bold">PENDIDIKAN DASAR</div>
                  <p className="font-normal opacity-90">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p>
                </div>
                <div className="space-y-[10px] w-[200px]">
                  <GiMountainClimbing className="size-[90px] hover:opacity-75 hover:scale-110 fill-light-orange place-content-center mx-auto mb-[10px]" />
                  <div className="text-md font-bold">PENDIDIKAN LANJUT</div>
                  <p className="font-normal opacity-90">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p>
                </div>
                <div className=" space-y-[10px] w-[200px]">
                  <BsFillTreeFill className="size-[90px] hover:opacity-75 hover:scale-110 fill-light-orange place-content-center mx-auto mb-[10px]" />
                  <div className="text-md font-bold">PENGEMBANGAN</div>
                  <p className="font-normal opacity-90">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p>
                </div>
              </div>
              <div className="text-lg mt-[100px] mb-[5px] tracking-wider font-extrabold text-light-orange">
              DIVISI
              </div>
              <p className=" text-md font-normal opacity-65 mb-[15px]">
              Ada divisi apa aja di PASAINS?
              </p>
              <div className="border border-light-orange w-[100px] mx-auto place-content-center"></div>
              <div className="grid grid-cols-2 overflow-auto mx-auto px-6 gap-x-32 my-auto justify-center mb-12 w-[720px]">
                <div className=" container flex flex-col mt-12 space-y-sm items-center mx-auto">
                  <div className="mb-6 transition duration-300 hover:scale-110">
                    <img
                      src={require("../image/gh.jpg")}
                      alt="gunung"
                      className="size-lg rounded-lg shadow-md object-cover"
                    />
                  </div>
                  <h1 className="text-bold-orange font-bold">GUNUNG & HUTAN</h1>
                  <p className="w-[170px] text-center text-md font-normal opacity-90">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </p>
                </div>
                <div className="flex flex-col mt-12 space-y-sm items-center mx-auto">
                  <div className="mb-6 transition duration-300 hover:scale-110">
                    <img
                      src={require("../image/cv.jpg")}
                      alt="gunung"
                      className="size-lg rounded-lg shadow-md object-cover"
                    />
                  </div>
                  <h1 className="text-bold-orange font-bold">CAVING</h1>
                  <p className="w-[170px] text-center text-md font-normal opacity-90">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </p>
                </div>
                <div className="flex flex-col mt-12 space-y-sm items-center mx-auto">
                  <div className="mb-6 transition duration-300 hover:scale-110">
                    <img
                      src={require("../image/rc.jpg")}
                      alt="gunung"
                      className="size-lg rounded-lg shadow-md object-cover"
                    />
                  </div>
                  <h1 className="text-bold-orange font-bold">CLIMBING</h1>
                  <p className="w-[170px] text-center text-md font-normal opacity-90">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </p>
                </div>
                <div className="flex flex-col mt-12 space-y-sm items-center mx-auto">
                  <div className="mb-6 transition duration-300 hover:scale-110">
                    <img
                      src={require("../image/lh.jpg")}
                      alt="gunung"
                      className="size-lg rounded-lg shadow-md object-cover"
                    />
                  </div>
                  <h1 className="text-bold-orange font-bold">
                    LINGKUNGAN HIDUP
                  </h1>
                  <p className="w-[170px] text-center text-md font-normal opacity-90">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-xl font-bold py-[50px] text-light-orange tracking-wider">
            PUBLIKASI
          </div>
          <div className="grid grid-cols-3 w-[1500px] mb-[50px] mx-auto place-items-center">
            {title.map((item) => {
              return (
                <div key={item.id}>
                  <NavLink className="" to={`/post/${item.slug}`}>
                    <div className="justify-center w-[300px]">
                      <img
                        src={require("../image/sumbing.jpg")}
                        alt="gunung"
                        className="h-[250px] object-cover mb-[30px] rounded-md shadow-2xl hover:scale-110"
                      />
                      <div className="h-[200px] text-left">
                        <h1 className="text-md font-semibold">{item.title}</h1>
                        <h2 className="text-sm font-light">{item.location}</h2>
                        <p className="mt-[10px] text-md">
                          {item.content}
                          <br />
                          <button className="text-light-orange transition duration-300 hover:scale-x-95">
                            {"baca selengkapnya"}
                          </button>
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
        <div className="items-center mx-auto font-light text-md text-center mb-[50px] space-x-md">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="hover:scale-110"
          >
            Prev
          </button>
          <button>{page}</button>
          <button
            onClick={nextPage}
            disabled={page === totalPages}
            className="hover:scale-110"
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
}
