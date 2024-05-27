import { KepengurusanContent } from "../content/kepengurusan.content";
import { Layout } from "../layout";

export function Kepengurusan() {
  return (
    <Layout>
      <div className="flex flex-col pt-[120px] mb-[50px]">
        <div>
          <KepengurusanContent />
        </div>
      </div>
    </Layout>
  );
}
