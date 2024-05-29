import { OrganizationContent } from "../content/organization.content";
import { Layout } from "../layout";

export function Organization() {
  return (
    <Layout>
      <div className="flex flex-col pt-[120px] mb-[50px]">
        <div>
          <OrganizationContent />
        </div>
      </div>
    </Layout>
  );
}
