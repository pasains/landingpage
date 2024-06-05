import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContent, PostProps } from "../../content/post";

export function Post() {
  const { page } = useParams();
  const [data, setData] = useState<PostProps>({} as PostProps);

  const REACT_APP_PORTAL_BE_URL =
    process.env.REACT_APP_PORTAL_BE_URL || "http://localhost:8081";

  useEffect(() => {
    function fetchData() {
      fetch(`${REACT_APP_PORTAL_BE_URL}/api/post/${page}`)
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
