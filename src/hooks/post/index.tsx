import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContent, PostProps } from "../../pages/post";
import { contentData } from "../../data";

export function Post() {
  const { page } = useParams();
  const [data, setData] = useState<PostProps>({} as PostProps);

  useEffect(() => {
    function fetchData() {
      fetch(`${contentData}/api/post/${page}`)
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error("Not Found");
          }
          return response.json();
        })
        .then((json) => setData(json));
    }
    fetchData();
    return () => {};
  }, []);

  return <PostContent {...data} />;
}
