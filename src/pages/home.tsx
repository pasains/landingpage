import { Body } from "../container/body";
import Card from "../container/card";

export function Home() {
  return (
    <div>
      <div className="bg-sky-950">
        <div className="text-xl">
          <Card title="Twitter" />
        </div>
        <div>
          <Body />
        </div>
      </div>
    </div>
  );
}
