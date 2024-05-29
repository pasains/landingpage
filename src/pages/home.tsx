import React from "react";
import { Layout } from "../layout";
import { NavLink } from "react-router-dom";
import useHome from "../hooks/home.hooks";
import { Heading } from "../container/heading";
import { Bottom } from "../container/bottom";

export function Home() {
  const { totalPages, nextPage, prevPage, title, page } = useHome();

  return (
    <div>
      <div>
        <Heading />
      </div>
      <div className="flex flex-row">
        <div className="w-full pt-[120px] max-w-full text-lg bg-white text-black font-bold grid grid-cols-1">
          <div className="bg-gunung bg-center bg-no-repeat opacity-75 text-center mx-auto w-full max-w-full h-[640px] place-content-center">
            <h1 className=" text-2xl text-white font-bold leading-tight tracking-wider">
              NEVER ENDING <br />
              <span> BROTHERHOOD</span>
            </h1>
          </div>
          <div className="text-xl text-center my-12 text-bold-orange">
            KEGIATAN
          </div>
          <div className="grid grid-cols-3 mx-auto items-center">
            {title.map((item) => {
              return (
                <div key={item.id}>
                  <NavLink className="" to={`/post/${item.slug}`}>
                    <div className="mx-[30px] my-[30px] justify-center place-items-center">
                      <img
                        src={require("../image/gunung.jpg")}
                        alt="gunung"
                        className="h-[240px] w-[360px] object-cover rounded-md shadow-2xl mb-[30px] transition duration-300 hover:opacity-75"
                      />
                      <div className="w-[360px] text-justify">
                        <h1 className="text-md">{item.title}</h1>
                        <h2 className="text-sm font-light">{item.location}</h2>
                        <p className="mt-[10px] text-sm font-normal">
                          {item.content}
                          <br />
                          <button className="text-light-orange transition duration-300 hover:scale-110">
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
          <div className="items-center mx-auto  font-light text-md text-center mt-[30px] space-x-md">
            <button onClick={prevPage} disabled={page === 1}>
              Prev
            </button>
            <button>{page}</button>
            <button onClick={nextPage} disabled={page === totalPages}>
              Next
            </button>
          </div>
          <div>
            <Bottom />
          </div>
        </div>
      </div>
    </div>
  );
}
