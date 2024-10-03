import { Layout } from "../layout";
import { IoPersonCircle } from "react-icons/io5";
import { RiDoubleQuotesR } from "react-icons/ri";
import RefreshTop from "../components/refreshtop";
import { PostProps } from "../data";

export const PostContent: React.FC<PostProps> = ({
  title,
  location,
  author,
  picture1,
  picture2,
  picture3,
  picture4,
  picture5,
  text1,
  text2,
  text3,
  text4,
  caption,
  quote,
  name,
}) => {
  return (
    <Layout>
      <RefreshTop />
      <div className="pt-[96px]">
        <div className="flex flex-col place-content-center mx-auto container items-center w-full md:w-1/2">
          <div className="relative">
            <img src={picture1} />
            <div className="p-6 md:p-12 space-y-1">
              <h1 className="text-lg md:text-2xl font-bold opacity-80 text-left text-wrap">
                {title}
              </h1>
              <h2 className="font-light text-md md:text-lg text-bold-orange tracking-wide text-left ">
                {location}
              </h2>
              <h3 className="flex gap-2 text-sm items-center">
                <IoPersonCircle className="size-4 items-center" />
                <p className="items-center">{author}</p>
              </h3>
              <div>
                <p className="indent-8 text-justify text-md tracking-wide text-pretty leading-loose mt-4 md:mt-8">
                {text1}
                </p>
                <p className="indent-8 text-justify text-md tracking-wide text-pretty leading-loose mt-4 md:mt-8">
                {text2}
                </p>
                <p className="indent-8 text-justify text-md tracking-wide text-pretty leading-loose mt-4 md:mt-8">
                {text3}
                </p>
                <p className="indent-8 text-justify text-md tracking-wide text-pretty leading-loose mt-4 md:mt-8">
                {text4}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols md:grid-cols-2 p-4 gap-4 md:p-6 md:gap-6">
            <img
              src={picture2}
              alt=""
              className="w-full h-[540px] object-cover object-center place-content-center"
            />
            <img
              src={picture3}
              alt=""
              className="w-full h-[540px] object-cover object-center place-content-center"
            />
            <img
              src={picture4}
              alt=""
              className="w-full h-[540px] object-cover object-center place-content-center"
            />
            <img
              src={picture5}
              alt=""
              className="w-full h-[540px] object-cover object-center place-content-center"
            />
          </div>
          <div className="p-4 md:p-6">
            <p className="text-justify text-md tracking-wide text-pretty leading-loose">
            {caption}
            </p>
          </div>
          <div className="flex gap-4 md:gap-6 items-center p-6 md:p-12 mb-4 font-light text-md md:text-lg md:tracking-wider">
            <RiDoubleQuotesR className="size-14 md:size-16 fill-light-orange" />
            <div className="border border-light-orange h-20"></div>
            <p>
            "{quote}"
              <br /> <span> — {name} </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
