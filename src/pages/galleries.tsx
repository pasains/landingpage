import { Layout } from "../layout";
import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://graph.instagram.com/me/media", {
        params: {
          fields: "id,media_type,media_url,thumbnail_url,caption",
          access_token:
            "IGQWROSU9RZAExWZAzhQUHB3aHpZANVBMZAENMWTRJQmxIckZAZATG42V3AyNm1uZA1kzUkhFNmUzSWVHWENKRzJZAcXZADMnhsdWxVWEo2eVFCRmZASLWw3WGRRYU9kVXlXMFhZAMG83WkUyYTRLdWJwZAVVHN1FFNElPc1B0WWsZD",
        },
      })
      .then((response) => {
        console.log("Fetched Instagram posts:", response.data.data);
        setPosts(response.data.data);
        loadInstagramEmbedScript();
      })
      .catch((error) => {
        console.error("Error fetching Instagram posts:", error);
      });
  }, []);
  const loadInstagramEmbedScript = () => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  };

  return (
    <Layout>
      <div className="p-4 md:p-6 font-nunito scroll-smooth focus:scroll-auto">
        <div className="flex flex-cols mt-24 mb-10 md:mb-12">
          <div className="flex flex-cols gap-3 md:gap:4 w-full">
            <button className="border border-light-orange h-20 md:h-28"></button>
            <h1 className="text-left text-xl md:text-3xl font-extrabold tracking-wider text-bold-orange">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-1">
          {posts.map((post) => (
            <div key={post.id}>
              {post.media_type === "VIDEO" ? (
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`https://www.instagram.com/p/${post.id}/`}
                  data-instgrm-version="12"
                ></blockquote>
              ) : (
                <img src={post.media_url} alt="media" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default InstagramFeed;
