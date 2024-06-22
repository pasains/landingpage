import { AboutContent } from "../content/about/index";
import { Layout } from "../layout";
import RefreshTop from "../components/refreshtop";

export function About() {
  return (
    <Layout>
      <RefreshTop />
      <div className="pt-24 scroll-smooth focus:scroll-auto">
          <AboutContent />
      </div>
    </Layout>
  );
}
