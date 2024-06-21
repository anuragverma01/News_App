import React, { useEffect } from "react";
import { serviceEndPoints } from "../Networking/end-points";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/slice/data";

export default function useFetchAPI() {
  const dispatch = useDispatch();

  const Categories = [
    {
      id: 0,
      name: "Top-headline",
    },
    {
      id: 1,
      name: "Business",
    },
    {
      id: 2,
      name: "Entertainment",
    },
    {
      id: 3,
      name: "Health",
    },
    {
      id: 4,
      name: "Science",
    },
    {
      id: 5,
      name: "Sports",
    },
    {
      id: 6,
      name: "Technology",
    },
  ];
  const fetchAllData = async () => {
    let arrayList: any = [];
    Categories.map(async (item, index) => {
      arrayList.push(
        fetch(
          serviceEndPoints.top_HEADLINES + `&q=${item.name}&pageSize=20&page=1`
        ).then((res) => res.json())
      );
    });
    Promise.all(arrayList).then((res: any) => {
      console.log("RES", res);
      let dataArray: any = {};
      if (res?.length) {
        Categories.map(async (item, index) => {
          dataArray[item?.name] = res?.[index]?.articles || [];
        });
      }
      console.log("DATA ARRAY!!!!!!!!!!!!", dataArray);
      dispatch(getData(dataArray));
    });
  };

  return {fetchAllData}
}
