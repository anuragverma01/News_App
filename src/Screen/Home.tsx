import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Carsouals from "./Carsouals";
import Header from "./Header";
import { serviceEndPoints } from "../Networking/end-points";
import { useDispatch } from "react-redux";
import { getData } from "../Redux/slice/data";
import CardTypeTwo from "./CardTypeTwo";
import { useNavigate } from "react-router-dom";
import useFetchAPI from "../Custom-Hook/useFetch";

function Home() {
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
  const navigate = useNavigate();
  const { fetchAllData } = useFetchAPI();
  const HandleClick = (q: string) => {
    navigate(`/categories/${q}`);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      <Header />
      <div className=" flex flex-col mx-10">
        <div className=" flex px-2 items-center py-5 gap-2 ">
          <p className=" w-1 h-8 bg-red-500"></p>

          <p className=" md:text-2xl text-xl font-bold">Categories Wise News</p>
        </div>
        <div className=" flex flex-row overflow-x-scroll">
          {Categories.map((item, index) => (
            <div className="px-2">
              <button
                onClick={() => {
                  HandleClick(item.name);
                }}
                className=" border-2 rounded-xl p-2 text-sm md:text-base  font-medium"
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Cards query={"Top-headline"} />
      <Carsouals query={"Business"} />

      <Cards query={"Entertainment"} />
      <CardTypeTwo type={"Science"} query={"Health"} />
    </>
  );
}

export default Home;
