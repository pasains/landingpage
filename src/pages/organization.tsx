import { OrganizationContent } from "../content/organization/index";
import { Layout } from "../layout";

export function Organization() {
  return (
    <Layout>
      <div className="flex flex-col mt-[80px] p-[90px] bg-pattren">
        <div>
          <OrganizationContent />
        </div>
      </div>
    </Layout>
  );
}
