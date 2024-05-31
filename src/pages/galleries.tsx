import { Layout } from "../layout";
import React, { useEffect, useState } from "react";
import axios from "axios";

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // Make a request to the Instagram API
    axios
      .get("https://graph.instagram.com/me/media", {
        params: {
          fields: "id,media_type,media_url,thumbnail_url,caption",
          access_token:
            "IGQWROQ2lRekt5SUs4RGI0YXF1Tl9tNlRJb1Nxb0JMemR6N3gyU0xKR25vbXFtYXVSQVRYem44OVJnSHp1ZA3RNakJjNFU1cE12S053NVdXVk9XZA2FPcmVDRVRGYXZApMFpoR3hwNTRZAUXhpelZABeUxVV1BfVGtKSEEZD", // Replace with your access token
        },
      })
      .then((response) => {
        // Set the retrieved posts in state
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching Instagram posts:", error);
      });
  }, []);

  return (
    <Layout>
      <div className="pt-[90px] p-[50px] my-[50px]">
        <h2
          className="
        mb-[50px] text-center text-xl font-bold text-bold-orange
        "
        >
          Instagram Feed
        </h2>
        <div className="grid grid-cols-3 gap-[50px]">
          {posts.map((post) => (
            <div key={post.id}>
              <img className="mb-[10px]" src={post.media_url} alt={post.caption} />
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default InstagramFeed;
