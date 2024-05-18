import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostLayout, PostProps } from "../layout/post.layout";

export function Post() {
  const { page } = useParams();
  const [data, setData] = useState<PostProps>({} as PostProps);

  useEffect(() => {
    fetch(`http://localhost:8080/api/post/${page}`)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Not Found");
        }
        return response.json();
      })
      .then((json) => setData(json));
  }, []);
  return <PostLayout {...data} />;
}
