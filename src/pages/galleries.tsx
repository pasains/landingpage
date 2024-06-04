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
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching Instagram posts:", error);
      });
  }, []);

  return (
    <Layout>
      <div className="pt-[90px] p-[50px] my-[50px] scroll-smooth focus:scroll-auto">
        <h2
          className="
        mb-[50px] text-center text-xl font-bold text-bold-orange
        "
        >
          Our Instagram Feed
        </h2>
        <div className="grid grid-cols-3 gap-[50px]">
          {posts.map((post) => (
            <div key={post.id}>
              <img
                src={post.media_url} alt="media"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default InstagramFeed;
