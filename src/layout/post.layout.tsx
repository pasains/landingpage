import { Bottom } from "../container/bottom";
import { Heading } from "../container/heading";

export interface PostProps {
  id: number;
  slug: string;
  title: string;
  location: string;
  content: string;
  picture: string;
}

export function PostLayout(props: PostProps) {
  return (
    <div>
      <div>
        <Heading />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col mt-32 space-y-lg items-center mx-auto text-justify place-content-center w-[720px]">
          <h1 className="text-lg text-center">{props.title}</h1>
          <p>{props.content}</p>
          <p>{props.picture}</p>
        </div>
      </div>
      <div className="mt-12">
        <Bottom />
      </div>
    </div>
  );
}
