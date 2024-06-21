import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/AppStore";
import Header from "../components/Header";
import useFetchAPI from "../custom-hook/useFetch";
import { Categories } from "../constants";
import { GridLoader } from "react-spinners";


function Details () {
  const [fetchdata, setfetchdata] = useState<any>(null);
  const data: any = useSelector((state: RootState) => state.setdata.data);
  const random = Math.floor(Math.random() * 7);
  const caty = Categories?.[random]
  const Datafetch = data?.[caty?.name];
  const { fetchAllData } = useFetchAPI();
  
  const HandleError: any = useSelector(
    (state: RootState) => state.setdata.error
  );
  const HandleLoading: any = useSelector(
    (state: RootState) => state.setdata.loading
  );
  useEffect(() => {
    const categoryDetails: any = localStorage.getItem("Item-Detail");
    if (categoryDetails) {
      setfetchdata(JSON.parse(categoryDetails));
    }
  }, []);
  
  useEffect(() => {
    fetchAllData();
  }, []);
  if (HandleLoading) {
    return (
      <div className="spinner-container flex items-center justify-center absolute top-0 bottom-0 right-0 left-0">
        <GridLoader size={60} color={"#36d7b7"} loading={HandleLoading} />
      </div>
    );
  }

  if (HandleError) {
    return <div>Error: {HandleError}</div>;
  }

 


  return (
    <>
      <Header />
      <div className="w-[90%] mx-auto pb-12">
        <div className="md:flex flex-col md:flex-row mt-12">
          <div className="md:w-[70%] justify-center ">
            <div className="h-full w-full flex flex-col p-2 gap-4 ">
              <div className="flex w-full h-auto gap-4  flex-col md:flex-row justify-center ">
                <div className=" w-full ">
                  <img
                    className=" w-full md:h-[700px] object-fill rounded-xl"
                    src={ fetchdata?.urlToImage }
                  />
                  <p className=" px-2 text-justify pt-6 pb-2 text-[18px] text-black font-semibold">
                    { fetchdata?.title }
                  </p>
                  <p className=" px-2 text-justify my-2 text-[16px] text-gray-800">
                    { fetchdata?.description }
                  </p>
                  <p className=" px-2 text-justify my-2 text-[16px] text-gray-800">
                    { fetchdata?.content }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] md:ml-4 ">
            <div className=" flex px-2 items-center py-5 gap-2 ">
              <p className=" w-1 h-8 bg-red-500"></p>
              <p className=" font-bold text-2xl">{ caty?.name }</p>
            </div>
            <div className="grid grid-cols-1 gap-6 mb-4 mx-auto">
              { Datafetch?.slice(0, 4)?.map((item: any, index: any) => {
                if (item?.urlToImage) {
                  return (
                    <div
                      key={ item?.title + item?.description }
                      className="w-full flex-col md:flex md:flex-row p-2 rounded-md shadow-xl cursor-pointer border-[0.5px]"
                    >
                      <img
                        className=" object-cover md:w-[150px] md:h-[200px] rounded-lg"
                        src={ item?.urlToImage }
                        alt=""
                      />
                      <div>
                        <p className=" px-2 text-justify text-[18px] text-black line-clamp-2 font-semibold">
                          { item.title }
                        </p>
                        <p className=" px-2 text-justify my-2 text-[16px] text-gray-800 line-clamp-3">
                          { item.description }
                        </p>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              }) }
            </div>
          </div>
        </div>
        <Cards query={ "Technology" } />
      </div>
    </>
  );
}

export default Details;