import { AboutContent } from "../content/about/index";
import { Layout } from "../layout";

export function About() {
  return (
    <Layout>
      <div className="pt-24 scroll-smooth focus:scroll-auto">
        <AboutContent />
      </div>
    </Layout>
  );
}
