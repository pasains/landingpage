import { useEffect, useState } from "react";
import { Heading } from "../container/heading";
import { NavLink } from "react-router-dom";
import { InventarisProps } from "../layout/inventaris.layout";
import { Bottom } from "../container/bottom";

export function Inventaris() {
  const [tools, setTools] = useState<InventarisProps[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8080/api/inventaris/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not found");
        }
        return response.json();
      })
      .then((json) => setTools(json));
  }, []);

  return (
    <div>
      <div>
        <Heading />
      </div>
      <div className="flex flex-col">
        <div className="text-xl pt-[120px] mx-auto text-center font-normal text-bold-orange">
          Inventaris Alat
        </div>
        <div className="grid grid-cols-4 overflow-auto mx-auto items-center gap-[42px] mt-12 items-centers">
          {tools.map((inventory) => {
            return (
              <div
                className="w-full h-full justify-center items-center"
                key={inventory.id}
              >
                <div className="rounded-lg shadow-lg h-[300px] mb-4 text-center overflow-hidden mx-3 transition duration-300 hover:scale-110">
                  <NavLink to={`/inventaris/${inventory.id}`}>
                    <img
                      className="max-h-[200px] group-hover:scale-100 mx-auto"
                      src={inventory.picture}
                    />
                    <div className="my-2">{inventory.name}</div>
                    <div className="font-light my-3">{inventory.nomor}</div>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-12">
        <Bottom />
      </div>
    </div>
  );
}
