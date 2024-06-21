import axios from "axios";
import React, { useEffect, useState } from "react";
import { serviceEndPoints } from "../Networking/end-points";
import { json } from "stream/consumers";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/slice/data";
import { RootState } from "../Redux/Store/AppStore";
import useFetchAPI from "../Custom-Hook/useFetch";

function Cards({ query }: any) {
  const data: any = useSelector((state: RootState) => state.setdata.data);
  console.log("DATA FROM SELECTOR ~~~~~~~~~~~~", query, data?.[query]);   
  const fetchData = data?.[query] || [];
  const { fetchAllData } = useFetchAPI();

  return (
    <div className=" mx-10">
      <div>
        <div className=" flex items-center justify-between   ">
          <div className=" flex px-2 items-center py-5 gap-2 ">
            <p className=" w-1 h-8 bg-red-500"></p>
            <p className=" font-bold md:text-2xl text-xl ">{query}</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-2 justify-center">
        {fetchData?.slice(0, 5).map((item: any, index: any) => {
          if (item?.urlToImage) {
            return (
              <div className="w-full md:h-min-[150px] md:max-w-[500px] p-2 bg-white rounded-md my-5 md:my-0 shadow-lg  ">
                <img
                  className=" object-fill w-full h-[200px] rounded-lg"
                  src={item.urlToImage}
                />
                <p className=" px-2 text-justify py-2 text-base font-medium md:text-lg line-clamp-3">
                  {item.description}
                </p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Cards;
