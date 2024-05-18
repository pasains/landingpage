import { Bottom } from "../container/bottom";
import { Heading } from "../container/heading";
import { AboutContent } from "../content/about.content";

export function About() {
  return (
    <div>
      <div>
        <Heading />
      </div>
      <div className="flex flex-col">
        <div className="w-full max-w-full mt-32">
          <AboutContent />
        </div>
        <div className="mt-6">
          <Bottom />
        </div>
      </div>
    </div>
  );
}
