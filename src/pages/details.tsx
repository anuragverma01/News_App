import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/AppStore";

function Details() {
  const [fetchdata, setfetchdata] = useState<any>(null);
  const data: any = useSelector((state: RootState) => state.setdata.data);
  const Datafetch = data.Sports;
  useEffect(() => {
    const categoryDetails: any = localStorage.getItem("Item-Detail");
    if (categoryDetails) {
      setfetchdata(JSON.parse(categoryDetails));
    }
  }, []);

  return (
    <>
      <div className=" md:flex my-10  ">
        <div className="   h-full w-full flex  flex-col p-2 gap-4 ">
          <div>
            <p className=" font-bold text-2xl">{fetchdata?.title}</p>
          </div>
          <div className="flex w-full h-auto gap-4  flex-col md:flex-row justify-center ">
            <div className=" w-full ">
              <img
                className=" w-full h-[700px] object-fill rounded-xl"
                src={fetchdata?.urlToImage}
              />
              <p className=" font-bold text-sm md:text-base text-balance px-2">
                {fetchdata?.description}
              </p>
              <p className=" text-sm text-justify px-2">{fetchdata?.content}</p>
            </div>
          </div>
        </div>

        <div className="md:w-[35%] flex  w-full flex-col">
          <div className=" flex px-2 items-center py-5 gap-2 ">
            <p className=" w-1 h-8 bg-red-500"></p>
            <p className=" font-bold text-2xl">Sports</p>
          </div>
          <div className="w-full flex  flex-col p-2">
            {Datafetch?.slice(0, 4).map((item: any, index: any) => (
              <div className="flex w-full p-2 border-2 rounded-xl gap-4  flex-col md:flex-row shadow-md  transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110  duration-500 ">
                <img
                  className="md:w-[150px] md:h-[180px] object-cover rounded-xl "
                  src={item.urlToImage}
                />
                <div className=" flex flex-col justify-center ">
                  <p className=" font-bold">{item.title}</p>
                  <p className=" font-normal text-sm md:text-sm text-justify">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cards query={"Technology"} />
    </>
  );
}

export default Details;
