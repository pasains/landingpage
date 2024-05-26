import { Bottom } from "../container/bottom";
import { Heading } from "../container/heading";
import { Rating } from "flowbite-react";
import { History } from "./history.layout";

export interface InventarisProps {
  id: number;
  slug: string;
  name: string;
  nomor: string;
  description: string;
  picture: string;
}

export interface PaginationProps {
  dataInventory: InventarisProps[];
  size: number;
}

export function InventarisLayout(props: InventarisProps) {
  return (
    <div>
      <div>
        <Heading />
      </div>
        <div className="flex flex-col items-center pt-[120px] mx-auto mt-[50px] overflow-hidden max-w-full">
          <div className="flex flex-cols">
            <div className="grid grid-cols-2 gap-[10px]">
              <img className="object-cover size-2xl" src={props.picture} />
              <img className="object-cover size-2xl" src={props.picture} />
              <img className="object-cover size-2xl" src={props.picture} />
              <img className="object-cover size-2xl" src={props.picture} />
            </div>
            <div className="mx-[50px] w-[400px]">
            <div className="text-md font-light">Jenis Inventaris</div>
              <div className="tracking-wide text-lg text-black font-bold">
                {props.name}
              </div>
              <p className="text-sm font-normal tracking-wide">{props.nomor}</p>
              <h1 className="text-lg font-semibold mt-[25px]">4.95
              <span className="font-normal text-sm">/5
              </span> </h1>
              <Rating className="mt[15px]">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              </Rating>
              <h1 className="font-semibold tracking-wide mt-[25px] text-justify">Condition:
              <span className="font-normal ml-[5px]">Penjelasan kondisi alat terbaru</span></h1>
              <h1 className="font-semibold tracking-wide mt-[25px] text-justify">Description:
              <span className="font-normal ml-[5px]">{props.description} </span></h1>
              <div className="flex flex-col">
              <button className="border-2 w-[250px] h-[50px] hover:bg-light-orange transition hover:scale-110 duration-300 mt-[25px]">Tersedia</button>
              <button className="bg-light-orange rounded-lg text-md hover:bg-bold-orange tracking-wide transition mt-[35px] hover:scale-110 duration-300 text-center h-[50px] w-[100px]">
                PINJAM
              </button>
              </div>
            </div>
          </div>
        </div>
      <History />
      <div>
        <Bottom />
      </div>
    </div>
  );
}
