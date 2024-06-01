import { OrganizationContent } from "../content/organization/index";
import { Layout } from "../layout";

export function Organization() {
  return (
    <Layout>
      <div className="bg-pattren">
        <OrganizationContent />
      </div>
    </Layout>
  );
}
