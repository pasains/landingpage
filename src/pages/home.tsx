import React from "react";
import { Layout } from "../layout";
import RefreshTop from "../components/refreshtop";
import { Post } from "../content/post/";
import  {HomeContent} from "../content/home";

export function Home() {
  return (
    <Layout>
      <RefreshTop />
      <div className="font-nunito scroll-smooth focus:scroll-auto">
        <div className="max-w-full justify-items-center mx-auto text-center">
          <HomeContent />
          <Post />
        </div>
      </div>
    </Layout>
  );
}
