import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/AppStore";
import { useNavigate } from "react-router-dom";

function Carsouals({ query }: any) {
  const data: any = useSelector((state: RootState) => state.setdata.data);
  const fetchData = data?.[query] || [];
  console.log("CARSOUALS DAAT!!!!!!!!!", data);
  const navigate = useNavigate();

  const handleDetailClick = async (item: any) => {
    await localStorage.setItem("Item-Detail", JSON.stringify(item));
    navigate(`/detail/${item.title}`);
  };

  return (
    <div className=" px-10  ">
      <div className=" flex px-2 items-center py-5 gap-2">
        <p className=" w-1 h-8 bg-red-500"></p>
        <p className=" font-bold text-2xl my-5">{query}</p>
      </div>

      <div className=" md:flex gap-5  flex-wrap">
        {fetchData.slice(0, 7).map((item: any, index: any) => {
          if (item?.urlToImage) {
            return (
              <div
                onClick={() => {
                  handleDetailClick(item);
                }}
                className="w-full md:h-min-[300px] md:max-w-[500px] p-2 bg-white rounded-md my-5 md:my-0 shadow-lg cursor-pointer "
              >
                <img
                  className=" object-cover w-full h-[300px] rounded-lg"
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

export default Carsouals;
