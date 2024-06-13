import React from "react";
import useHome from "../../hooks/home";
import { NavLink } from "react-router-dom";

export function Post() {
  const { totalPages, nextPage, prevPage, title, page } = useHome();
  return (
    <div>
      <div className="text-lg md:text-2xl mt-20 tracking-wider font-extrabold text-light-orange ">
        PUBLIKASI
      </div>
      <p className=" text-md md:text-lg font-normal opacity-65 my-3 w-full p-4 md:w-1/2 md:my-5 mx-auto text-center">
        Yuk, lihat update terbaru dari kegiatan PASAINS !
      </p>
      <div className="border border-light-orange w-32 mx-auto"></div>
      <div className="container w-fit my-10 md:mt-20 mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 items-center">
        {title.map((item) => {
          return (
            <div key={item.id}>
              <NavLink  to={`/post/${item.slug}`}>
                <div className="w-80 bg-black bg-opacity-65 text-white transition hover:scale-110 shadow-2xl">
                  <img
                    src={require("../../image/gh.jpg")}
                    alt="gunung"
                    className="h-[280px] w-full object-cover"
                  />
                  <div className="h-[230px] text-left mx-2 mb:mx-4 my-4 md:my-6">
                    <h1 className="text-sm font-extralight">POSTED ON 12 JUNE 2024</h1>
                    <h2 className="text-md font-semibold uppercase">{item.title}</h2>
                    <p className="text-md font-normal my-4 mb:my-8">
                      {item.content}
                      <br />
                      <button className="text-light-orange transition duration-300 hover:text-white">
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
  );
}
