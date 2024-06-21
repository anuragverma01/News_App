import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/AppStore";
import { useNavigate } from "react-router-dom";

export default function CardTypeTwo({ query, type }: any) {
  const data: any = useSelector((state: RootState) => state.setdata.data);
  const fetchData = data?.[query] || [];
  const fetchData2 = data?.[type] || [];
  console.log("CARD TYPE TWO FETCH DATA", data?.[query]);
  console.log("CARD TYPE TWO FETCH DATA @222", data?.[type]);
  console.log("AAAAA", query, type);
  const navigate = useNavigate();

  const handleDetailClick = async (item: any) => {
    await localStorage.setItem("Item-Detail", JSON.stringify(item));
    navigate(`/detail/${item.title}`);
  };

  return (
    <div className=" md:flex my-10 ">
      <div className="md:w-[65%] flex flex-wrap justify-center ">
        {fetchData.slice(0, 9).map((item: any, index: any) => (
          <div
            onClick={() => handleDetailClick(item)}
            className=" w-full h-full md:w-[25%] md:h-auto shadow-lg rounded-lg m-4  p-2 flex flex-col cursor-pointer "
          >
            <img
              className=" w-full h-full object-cover rounded-xl"
              src={item.urlToImage}
            />
            <div className="  flex flex-col px-2 py-4">
              <p className=" font-medium   text-base md:text-sm text-balance">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:w-[35%] flex  w-full">
        <div className="w-full flex  flex-col p-2">
          {fetchData2.slice(0, 4).map((item: any, index: any) => (
            <div className="flex w-full p-2 rounded-xl gap-4 cursor-pointer  flex-col md:flex-row shadow-xl  transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110  duration-500 ">
              <img
                className="md:w-[150px] md:h-[200px] object-cover rounded-xl "
                src={item.urlToImage}
              />
              <div className=" flex flex-col justify-center ">
                <p className=" font-bold">{item.title}</p>
                <p className=" font-normal text-sm md:text-sm text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
