import { useState } from "react";
import { serviceEndPoints } from "../Networking/end-points";
import { setError, setLoading } from "../redux/slice/data";
import { useDispatch } from "react-redux";

export default function useFetchCategory() {
  const [categoryData, setCategoryData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const dispatch = useDispatch();

  const fetchCategoryData = async (name: string, page: number) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    const res = await fetch(
      serviceEndPoints.top_HEADLINES + `&q=${name}&pageSize=20&page=${page}`
    ).then((res) => res.json());

    if (res?.status === "ok") {
      setTotalPage(res?.totalResults);
      setCategoryData(res?.articles);
      dispatch(setLoading(false));
    }
  };

  return { fetchCategoryData, categoryData, totalPage };
}
