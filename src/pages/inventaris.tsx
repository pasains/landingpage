import { useEffect, useState } from "react";
import { Heading } from "../container/heading";
import { NavLink } from "react-router-dom";
import { InventarisProps } from "../layout/inventaris.layout";
import { Bottom } from "../container/bottom";

export function Inventaris() {
  const [tools, setTools] = useState<InventarisProps[]>([]);
  const [page, setPage] = useState(1);
  const [size] = useState(17);

  useEffect(() => {
    fetch(`http://localhost:8081/api/inventaris/?size=6&page=1`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not found");
        }
        return response.json();
      })
      .then((json) => setTools(json));
  }, []);

  const totalPages = size / 6;

  const nextPage=() => {
  const nextPage = page + 1;
  setPage(nextPage);
  fetch(`http://localhost:8081/api/inventaris/?size=6&page=${nextPage}`)
    .then((response) => {
    if (!response.ok) {
      throw new Error ("Not Found");
    }
    return response.json();
  })
  .then((json) => setTools(json))
  };

  const prevPage=() => {
  const prevPage = page - 1;
  setPage(prevPage);
  fetch(`http://localhost:8081/api/inventaris/?size=6&page=${prevPage}`)
    .then((response) => {
    if (!response.ok) {
      throw new Error ("Not Found");
    }
    return response.json();
  })
  .then((json) => setTools(json))
  };

  return (
    <div>
      <div>
        <Heading />
      </div>
      <div>
        <div className="text-xl pt-[120px] mx-auto mt-[50px] text-center font-semibold tracking-wide text-bold-orange">
          Inventaris Alat
        </div>
        <div className="flex flex-row mx-auto text-center place-content-center">
        <div className="divide-y mt-[50px] text-left mx-[60px] space-y-md flex flex-col  w-[200px] align-middle">
        <div className="pt-[25px]">Logistik Utama</div>
        <div className="pt-[25px]">Logistik Sekretariat</div>
        <div className="pt-[25px]">Logistik Dapur</div>
        <div className="pt-[25px]">Rigging Set Caving</div>
        <div className="pt-[25px]">Rigging Set Climbing</div>
        <div className="pt-[25px]">Rescue Set</div>
        <div className="pt-[25px]">SRT Set</div>
        <div className="pt-[25px]">Climbing</div>
        <div className="pt-[25px]">Unit</div>
        </div>
        <div className="grid grid-cols-3 overflow-auto gap-[50px] mt-[50px]">
          {tools.map((inventory) => {
            return (
              <div
                className="w-full h-full justify-center items-center"
                key={inventory.id}
              >
                <div className="text-left">
                  <NavLink to={`/inventaris/${inventory.id}`}>
                    <img
                      className="max-h-[300px] "
                      src={inventory.picture}
                    />
                    <div className="text-left font-semibold align-middle my-[10px]">{inventory.name}</div>
                  <div className="text-left text-sm font-normal tracking-wider my-[10px]">{inventory.nomor}</div>
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>
      </div>
      </div>
      <div className="items-center mx-auto text-center mt-[30px] space-x-md">
      <button onClick={prevPage} disabled={page === 1}>Prev</button>
      <button>{page}</button>
      <button onClick={nextPage} disabled={page === totalPages}>Next</button>
      </div>
      <div>
        <Bottom />
      </div>
    </div>
  );
}
