import { Bottom } from "../container/bottom";
import { Heading } from "../container/heading";

export interface PostProps {
  id: number;
  slug: string;
  title: string;
  location: string;
  content: string;
  description: string;
  picture: string;
}

export function PostLayout(props: PostProps) {
  return (
    <div>
      <div>
        <Heading />
      </div>
      <div className="pt-[120px]">
        <div className="flex flex-col place-content-center leading-tight mx-auto w-[720px]">
          <h1 className="text-2xl font-bold text-left text-pretty opacity-80">
            {props.title}
          </h1>
          <h2 className="font-light text-bold-orange tracking-wide">
            {props.location}
          </h2>
          <div className="space-y-lg text-pretty">
            <img
              src={require("../image/sumbing.jpg")}
              alt="sumbing"
              className="mt-[30px] w-full h-[420px] object-cover place-content-center mx-auto"
            />
            <p className="text-justify text-md tracking-wide leading-loose">
              {props.content}
              {props.description}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Bottom />
      </div>
    </div>
  );
}
