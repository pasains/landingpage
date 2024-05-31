import { AboutContent } from "../content/about/index";
import { Layout } from "../layout";

export function About() {
  return (
    <Layout>
      <div className="flex flex-col pt-[90px]">
        <div className="w-full max-w-full">
          <AboutContent />
        </div>
      </div>
    </Layout>
  );
}
