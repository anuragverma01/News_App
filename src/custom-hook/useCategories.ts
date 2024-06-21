import { useState } from "react";
import { serviceEndPoints } from "../Networking/end-points";

export default function useFetchCategory () {
  const [categoryData, setCategoryData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const fetchCategoryData = async (name: string, page: number) => {
    const res = await fetch(
      serviceEndPoints.top_HEADLINES + `&q=${name}&pageSize=20&page=${page}`
    ).then((res) => res.json());
    if (res?.status === "ok") {
      setTotalPage(res?.totalResults);
      setCategoryData(res?.articles);
    }
  };

  return { fetchCategoryData, categoryData, totalPage };
}
