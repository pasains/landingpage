import { Layout } from "../layout";
import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const REACT_APP_INSTAGRAM_ACCESS_TOKEN =
    process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN;

  useEffect(() => {
    axios
      .get("https://graph.instagram.com/me/media", {
        params: {
          fields:
            "id,media_type,media_url,thumbnail_url,caption,is_shared_to_feed,permalink,timestamp,username",
          access_token: REACT_APP_INSTAGRAM_ACCESS_TOKEN,
        },
      })
      .then((response) => {
        const post = response?.data?.data.filter((item: any) => {
          console.log(`TEST_`, item);
          if (
            item.media_type === "IMAGE" ||
            item.media_type === "CAROUSEL_ALBUM"
          ) {
            return item;
          }
        });
        console.log("Fetched Instagram posts:", post);
        setPosts(post);
      })
      .catch((error) => {
        console.error("Error fetching Instagram posts:", error);
      });
  }, [REACT_APP_INSTAGRAM_ACCESS_TOKEN]);

  return (
    <Layout>
      <div className="p-4 md:p-6 font-nunito scroll-smooth focus:scroll-auto">
        <div className="flex flex-cols mt-24 mb-10 md:mb-12">
          <div className="flex flex-cols gap-3 md:gap:4 w-full">
            <button className="border border-light-orange h-24 md:h-28"></button>
            <h1 className="text-left text-2xl md:text-3xl font-extrabold tracking-wider text-bold-orange">
              OUR
              <br />
              INSTAGRAM
              <br />
              POST
            </h1>
          </div>
          <div className="relative flex-none w-12 md:w-16">
            <div className="absolute bg-bold-orange right-0 w-12 h-12 md:w-16 md:h-16 z-20"></div>
            <div className="absolute bg-light-orange right-5 md:right-10  top-5 md:top-10 w-12 h-12 md:w-16 md:h-16 z-30"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 px-3 gap-1 md:gap-1">
          {posts &&
            posts.length > 0 &&
            posts.map((post) => (
              <div key={post.id}>
                <img src={post.media_url} alt="media" />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};
export default InstagramFeed;
