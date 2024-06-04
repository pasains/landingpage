import { AboutContent } from "../content/about/index";
import { Layout } from "../layout";
import RefreshTop from "../components/refreshtop";

export function About() {
  return (
    <Layout>
      <RefreshTop />
      <div className="flex flex-col pt-[90px] bg-pattren scroll-smooth focus:scroll-auto">
        <div className="w-full max-w-full">
          <AboutContent />
        </div>
      </div>
    </Layout>
  );
}
