import { Heading } from "../container/heading";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { PostProps } from "../layout/post.layout";
import { Bottom } from "../container/bottom";

export function Home() {
  const [title, setTitle] = useState<PostProps[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8080/api/post/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not found!");
        }
        return response.json();
      })
      .then((json) => setTitle(json));
  }, []);

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
          <div>
            <Bottom />
          </div>
        </div>
      </div>
    </div>
  );
}
