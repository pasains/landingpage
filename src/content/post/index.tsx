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
      <p className=" text-md md:text-lg font-normal opacity-65 my-3 w-full md:w-1/2 md:my-5 mx-auto text-center">
        Yuk, lihat update terbaru dari kegiatan PASAINS !
      </p>
      <div className="border border-light-orange w-32 mx-auto place-content-center"></div>
      <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-20 mt-12 place-items-center">
        {title.map((item) => {
          return (
            <div key={item.id}>
              <NavLink className="" to={`/post/${item.slug}`}>
                <div className="w-[300px] md:w-[400px] mb-6">
                  <img
                    src={require("../../image/sumbing.jpg")}
                    alt="gunung"
                    className="h-[280px] object-cover mb-3 shadow-2xl hover:scale-110 hover:opacity-70"
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
