import { Layout } from "../layout";
import { IoPersonCircle } from "react-icons/io5";
import { RiDoubleQuotesR } from "react-icons/ri";
import RefreshTop from "../components/refreshtop";

export interface PostProps {
  id: number;
  slug: string;
  title: string;
  location: string;
  content: string;
  description: string;
  picture: string;
}

export function PostContent(props: PostProps) {
  return (
    <Layout>
      <RefreshTop />
      <div className="pt-[96px]">
        <div className="flex flex-col place-content-center mx-auto container items-center w-full md:w-1/2">
          <div className="relative">
            <img
              src={require("../image/gh.jpg")}
              alt="sumbing"
              className="w-fit h-[460px] items-center object-cover place-content-center mx-auto"
            />
            <div className="p-6 md:p-12 space-y-1">
              <h1 className="text-lg md:text-2xl font-bold opacity-80 text-left text-wrap">
                {props.title}
              </h1>
              <h2 className="font-light text-md md:text-lg text-bold-orange tracking-wide text-left ">
                {props.location}
              </h2>
              <h3 className="flex gap-2 text-sm items-center">
                <IoPersonCircle className="size-4 items-center" />
                <p className="items-center">Susilawati</p>
              </h3>
              <div>
                <p className="text-justify text-md tracking-wide text-pretty leading-loose mt-4 md:mt-8">
                  {props.content}
                  {props.description}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols md:grid-cols-2">
            <img
              src={require("../image/cv.jpg")}
              alt=""
              className="w-96 h-96 object-cover place-content-center"
            />
            <img
              src={require("../image/cvcv.jpg")}
              alt=""
              className="w-96 h-96 object-cover place-content-center"
            />
            <img
              src={require("../image/cvcvcv.jpg")}
              alt=""
              className="w-96 h-96 object-cover place-content-center"
            />
            <img
              src={require("../image/cvcvcvcv.jpg")}
              alt=""
              className="w-96 h-96 object-cover place-content-center"
            />
          </div>
          <div className="p-6 md:p-12">
            <p className="text-justify text-md tracking-wide text-pretty leading-loose">
              {props.description}
            </p>
          </div>
          <div className="flex gap-4 md:gap-6 items-center p-6 md:p-12 mb-4 font-light text-md md:text-lg md:tracking-wider">
            <RiDoubleQuotesR className="size-14 md:size-16 fill-light-orange" />
            <div className="border border-light-orange h-20"></div>
            <p>
              "To the cave you fear to enter holds the treasure you seek."{" "}
              <br /> <span> — Joseph Campbell </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
