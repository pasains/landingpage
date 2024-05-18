import { Heading } from "../container/heading";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "../container/card";
import { PostProps } from "../layout/post.layout";
import { Bottom } from "../container/bottom";

export function Home() {
  const [title, setTitle] = useState<PostProps[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8080/api/post/title`)
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
        <div className="w-full max-w-full text-lg mt-32 bg-white text-black font-bold grid grid-cols-1">
          <div className="bg-gunung bg-center bg-no-repeat opacity-75 text-center mx-auto w-full max-w-full h-[640px] place-content-center">
            <h2 className=" text-2xl text-white font-bold leading-tight tracking-wider">
              NEVER ENDING <br />
              <span> BROTHERHOOD</span>
            </h2>
            <button className="h-8 w-32 mt-5 bg-bold-orange text-white rounded-md text-md transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-light-orange font-normal duration-300">
              Explore more
            </button>
          </div>
          <div className="text-xl text-center my-12 text-bold-orange">
            KEGIATAN
          </div>
          <div className="grid grid-cols-3 overflow-auto mx-auto items-center">
            {title.map((item) => {
              return (
                <div key={item.id}>
                  <NavLink
                    className="items-center justify-center text-md"
                    to={`/post/${item.slug}`}
                  >
                    <div className="text-sm mx-24 mb-24 w-80 h-92 justify-center place-items-center">
                      <Card
                        title={item.title}
                        description={item.location}
                        picture={item.picture}
                      />
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
