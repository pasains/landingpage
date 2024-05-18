import { Bottom } from "../container/bottom";
import { Heading } from "../container/heading";
import { KepengurusanContent } from "../content/kepengurusan.content";

export function Kepengurusan() {
  return (
    <div>
      <div>
        <Heading />
      </div>
      <div className="flex flex-col">
        <div className="mt-32">
          <KepengurusanContent />
        </div>
        <div className="mt-12">
          <Bottom />
        </div>
      </div>
    </div>
  );
}
