import { OrganizationContent } from "../content/organization/index";
import { Layout } from "../layout";
import RefreshTop from "../components/refreshtop";

export function Organization() {
  return (
    <Layout>
      <RefreshTop />
      <div className="bg-pattren scroll-smooth focus:scroll-auto">
        <OrganizationContent />
      </div>
    </Layout>
  );
}
