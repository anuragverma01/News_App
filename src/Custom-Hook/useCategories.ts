import React, { useEffect, useState } from "react";
import { serviceEndPoints } from "../Networking/end-points";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/slice/data";

export default function useFetchCategory() {
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState([])
  const [totalPage, setTotalPage] = useState(0)
 
  const fetchCategoryData = async (name:string, page:number) => {
    // Categories.map(async (item, index) => {
    //   arrayList.push(
     const res = await   fetch(
          serviceEndPoints.top_HEADLINES + `&q=${name}&pageSize=20&page=${page}`
        ).then((res) => res.json())
        console.log('RRRRR==>>>', res)
        if(res?.status === "ok"){
            setTotalPage(res?.totalResults)
            setCategoryData(res?.articles)
        }
    //   );
    // });
    // Promise.all(arrayList).then((res: any) => {
    //   console.log("RES", res);
    //   let dataArray: any = {};
    //   if (res?.length) {
    //     Categories.map(async (item, index) => {
    //       dataArray[item?.name] = res?.[index]?.articles || [];
    //     });
    //   }
    //   console.log("DATA ARRAY!!!!!!!!!!!!", dataArray);
    //   dispatch(getData(dataArray));
    // });
  };

  return {fetchCategoryData, categoryData, totalPage}
}
