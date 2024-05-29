import { Description } from "../components/description";
import { Title } from "../components/title";
import MiniCard from "../container/minicard";

export function AboutContent() {
  return (
    <div className="flex flex-col font-nunito">
      <div className="mt-6 text-justify mx-auto place-content-center w-[720px]">
        <h1 className="text-lg text-center text-bold-orange">
          Apa itu PASAINS?
        </h1>
        <Description description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
      </div>
      <div className="text-lg tracking-wide font-bold text-center">DIVISI</div>
      <div className="grid grid-cols-2 overflow-auto mx-auto px-6 gap-x-32 my-auto justify-center mb-12">
        <div className=" container flex flex-col mt-12 space-y-sm items-center mx-auto">
          <div className="mb-6 transition duration-300 hover:scale-110">
            <img
              src={require("../image/gunung.jpg")}
              alt="gunung"
              className="size-lg rounded-lg shadow-md object-cover"
            />
          </div>
          <h1 className="text-bold-orange font-bold">DIVISI GUNUNG & HUTAN</h1>
          <p className="w-40 text-center">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
        </div>
        <div className="flex flex-col mt-12 space-y-sm items-center mx-auto">
          <div className="mb-6 transition duration-300 hover:scale-110">
            <img
              src={require("../image/gunung.jpg")}
              alt="gunung"
              className="size-lg rounded-lg shadow-md object-cover"
            />
          </div>
          <h1 className="text-bold-orange font-bold">DIVISI CAVING</h1>
          <p className="w-40 text-center">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
        </div>
        <div className="flex flex-col mt-12 space-y-sm items-center mx-auto">
          <div className="mb-6 transition duration-300 hover:scale-110">
            <img
              src={require("../image/gunung.jpg")}
              alt="gunung"
              className="size-lg rounded-lg shadow-md object-cover"
            />
          </div>
          <h1 className="text-bold-orange font-bold">DIVISI CLIMBING</h1>
          <p className="w-40 text-center">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
        </div>
        <div className="flex flex-col mt-12 space-y-sm items-center mx-auto">
          <div className="mb-6 transition duration-300 hover:scale-110">
            <img
              src={require("../image/gunung.jpg")}
              alt="gunung"
              className="size-lg rounded-lg shadow-md object-cover"
            />
          </div>
          <h1 className="text-bold-orange font-bold">
            DIVISI LINGKUNGAN HIDUP
          </h1>
          <p className="w-40 text-center">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
        </div>
      </div>
    </div>
  );
}
