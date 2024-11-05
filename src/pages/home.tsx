import React from "react";
import { Layout } from "../layout";
import { Post } from "../content/post/";
import { HomeContent } from "../content/home";

export function Home() {
  return (
    <Layout>
      <div className="font-nunito scroll-smooth focus:scroll-auto">
        <HomeContent />
        <Post />
      </div>
    </Layout>
  );
}
