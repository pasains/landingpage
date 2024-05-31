import React from "react";
import {Layout} from "../layout";
import { NavLink } from "react-router-dom";
import useHome from "../hooks/home/index"

export function Home() {
const { totalPages, nextPage, prevPage, title, page} = useHome();

  return (
    <Layout>
      <div className="font-nunito">
        <div className="pt-[90px] max-w-full justify-items-center mx-auto text-center">
          <div className="bg-gunung bg-center place-content-center h-[640px] mx-auto max-w-full">
          <div className="bg-black bg-opacity-40 h-[640px] mx-auto place-content-center max-w-full">
            <h1 className="text-2xl text-white font-bold leading-tight tracking-widest">
              NEVER ENDING <br />
              <span> BROTHERHOOD</span>
            </h1>
          </div>
          </div>
          <div className="contaier border mt-[50px] p-[25px] w-[600px] text-md text-justify mx-auto tracking-wide">
          Selamat datang di situs web resmi PASAINS, wadah bagi para mahasiswa dan mahasiswi Fakultas Matematika dan Ilmu Pengetahuan Alam Universitas Gadjah Mada
          yang memiliki semangat tinggi dalam menjaga dan menjelajahi keindahan alam.
          </div>
          <div className="text-xl font-bold py-[50px] text-bold-orange">
            KEGIATAN TERBARU
          </div>
          <div className="grid grid-cols-3 mb-[50px]  place-items-center">
            {title.map((item) => {
              return (
                <div key={item.id}>
                  <NavLink className="" to={`/post/${item.slug}`}>
                    <div className="justify-center w-[360px]">
                      <img
                        src={require("../image/gunung.jpg")}
                        alt="gunung"
                        className="h-[240px] object-cover mb-[30px] rounded-md shadow-2xl transition duration-300 hover:opacity-75"
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
            <button onClick={prevPage} disabled={page === 1}>
              Prev
            </button>
            <button>{page}</button>
            <button onClick={nextPage} disabled={page === totalPages}>
              Next
            </button>
          </div>
          </div>
    </Layout>
  )};
