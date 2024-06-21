import React, { useEffect, useState } from "react";
import { serviceEndPoints } from "../Networking/end-points";
import { useDispatch } from "react-redux";

export default function useFetchCategory() {
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const fetchCategoryData = async (name: string, page: number) => {
    const res = await fetch(
      serviceEndPoints.top_HEADLINES + `&q=${name}&pageSize=20&page=${page}`
    ).then((res) => res.json());
    console.log("RRRRR==>>>", res);
    if (res?.status === "ok") {
      setTotalPage(res?.totalResults);
      setCategoryData(res?.articles);
    }
  };

  return { fetchCategoryData, categoryData, totalPage };
}
