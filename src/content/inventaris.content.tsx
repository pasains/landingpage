import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InventarisLayout, InventarisProps } from "../layout/inventaris.layout";

export function InventarisContent() {
  const { id } = useParams();
  const [data, setData] = useState<InventarisProps>({} as InventarisProps);

  useEffect(() => {
    fetch(`http://localhost:8081/api/inventaris/${id}`)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Not Found");
        }
        return response.json();
      })
      .then((json) => setData(json));
  }, []);



  return <InventarisLayout {...data} />;
}
