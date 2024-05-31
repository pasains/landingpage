import {PostProps} from "../../content/post"
import { useEffect, useState } from "react";

export default function useHome() {
  const [title, setTitle] = useState<PostProps[]>([]);
  const [page, setPage] = useState(1);
  const [size] = useState(12);

  useEffect(() => {
    function fetchTitle() {
    fetch(`http://localhost:8081/api/post/?size=3&page=1`)
      .then((response) => {
      console.log(response);
        if (!response.ok) {
          throw new Error("Not found!");
        }
        return response.json();
      })
      .then((json) => setTitle(json))
      .catch((error: any) => {
        console.log(error);
      });
    }
    fetchTitle();
    return () => {}
  }, []);

  const totalPages = size / 3;

  const nextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetch(`http://localhost:8081/api/post/?size=3&page=${nextPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not Found");
        }
        return response.json();
      })
      .then((json) => setTitle(json));
  };

  const prevPage = () => {
    const prevPage = page - 1;
    setPage(prevPage);
    fetch(`http://localhost:8081/api/post/?size=3&page=${prevPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not Found");
        }
        return response.json();
      })
      .then((json) => setTitle(json));
  };

return {
  title, nextPage, prevPage, page, totalPages
}
  };
