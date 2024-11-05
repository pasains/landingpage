import { OrganizationContent } from "../content/organization/index";
import { Layout } from "../layout";

export function Organization() {
  return (
    <Layout>
      <div className="scroll-smooth focus:scroll-auto">
        <OrganizationContent />
      </div>
    </Layout>
  );
}
