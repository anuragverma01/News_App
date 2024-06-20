import axios from "axios";
import React, { useEffect, useState } from "react";
import { serviceEndPoints } from "../Networking/end-points";
import { json } from "stream/consumers";
import { useDispatch } from "react-redux";

function Cards({ query }: any) {
  const dispatch = useDispatch();
  const Categories = [
    {
      id: 0,
      name: "Top Headlines",
    },
    { id: 1, name: "Business" },
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
  const [isdata, setisdata] = useState<any>();
  // const Fetchdata = async () => {
  // axios
  //   .get(serviceEndPoints.top_HEADLINES + `&q=${query}`)
  //   .then(function (response) {
  //     if (response) {
  //       console.log("RESPONSE DATA!!!!", response?.data?.articles);
  //       setisdata(response);
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log("ERROR ~~!!!!!!!", error);
  //   });
  // };

  const response = async () => {
    let arrayList:any = []
    Categories.map(async (item, index) => {
      arrayList.push(fetch(
        serviceEndPoints.top_HEADLINES + `&q=${item.name}&pageSize=10&page=1`
      ).then(res=> res.json()))
      // const res = await fetch(
      //   serviceEndPoints.top_HEADLINES + `&q=${item.name}`
      // );
      // const data = await res.json();
      // console.log(`DATA FROM RESONSE ${item.name}`, data);
      // dispatch(data);
    })
    Promise.all(arrayList).then(res=>{
      console.log('RES', res)
      let dataArray :any= {}
      if(res?.length){
        Categories.map(async (item, index) => {
          dataArray[item?.name] = res?.[index]?.articles || []
        })
      }
      console.log(dataArray)
    })
    // await Promise.all(
    //   Categories.map(async (item, index) => {
    //     const res = await fetch(
    //       serviceEndPoints.top_HEADLINES + `&q=${item.name}`
    //     );
    //     const data = await res.json();
    //     console.log(`DATA FROM RESONSE ${item.name}`, data);
    //     dispatch(data);
    //   })
    // );
  };

  useEffect(() => {
    response();
  }, []);
  return (
    <div className=" mx-10">
      <div>
        <div className=" flex items-center justify-between   ">
          <div className=" flex px-2 items-center py-5 gap-2 ">
            <p className=" w-1 h-8 bg-red-500"></p>
            <p className=" font-bold md:text-2xl text-xl ">{query}</p>
          </div>
          <div>
            <p className=" text-[#C13232] text-xl font-medium">See All</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row gap-4 justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(0, 5).map(() => (
          <div className=" md:w-80 md:h-80 h-full w-full shadow-xl p-4 rounded-lg transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110  duration-500 ">
            <div className=" w-full h-52 rounded-lg ">
              <img
                className=" object-cover w-full h-full rounded-lg"
                src="https://www.hindustantimes.com/ht-img/img/2024/06/18/1600x900/haris_indian_fan_1718703795654_1718703804611.jpg"
              />
            </div>
            <div className=" w-auto h-auto ">
              <p className=" font-medium text-sm my-2 text-balance ">
                Indus Towers special dividend coming post Vodafone stake sale?
                Here's what analysts say - CNBCTV18
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
