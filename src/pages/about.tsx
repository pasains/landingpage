import { Bottom } from "../container/bottom";
import { Heading } from "../container/heading";
import { AboutContent } from "../content/about.content";

export function About() {
  return (
    <div>
      <div>
        <Heading />
      </div>
      <div className="flex flex-col pt-[120px]">
        <div className="w-full max-w-full">
          <AboutContent />
        </div>
        <div>
          <Bottom />
        </div>
      </div>
    </div>
  );
}
