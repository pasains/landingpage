import { Bottom } from "../container/bottom";
import { Heading } from "../container/heading";

export interface InventarisProps {
  id: number;
  slug: string;
  name: string;
  nomor: string;
  description: string;
  picture: string;
}

export function InventarisLayout(props: InventarisProps) {
  return (
    <div className="bg-gunung">
      <div>
        <Heading />
      </div>
      <div className="flex flex-row">
        <div className="pt-[120px] mx-auto bg-light-orange overflow-hidden max-w-full">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="object-cover size-2xl" src={props.picture} />
            </div>
            <div className="p-8 w-[300px]">
              <div className="tracking-wide text-left text-lg text-black font-bold">
                {props.name}
              </div>
              <p className="text-sm font-light">{props.nomor}</p>
              <p className="text-md font-semibold mt-5">{props.description}</p>
              <button className="bg-white hover:bg-bold-orange text-right font-bold py-1 px-3 rounded-lg mt-5">
                PINJAM
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Bottom />
      </div>
    </div>
  );
}
