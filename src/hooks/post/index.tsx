import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContent } from "../../pages/post";
import { contentData } from "../../data";
import { PostProps } from "../../data";

type Params = {
  page: string;
};

export function Post() {
  const { page } = useParams<Params>();
  const [data, setData] = useState<PostProps>({} as PostProps);

  useEffect(() => {
    function fetchData() {
      if (!page) {
        console.error("Page parameter is missing");
        return;
      }
      const postData = contentData[page as keyof typeof contentData];
      if (postData) {
        setData(postData);
      } else {
        console.error("Data not found");
      }
    }
    fetchData();
  }, [page]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <PostContent {...data} />;
}
