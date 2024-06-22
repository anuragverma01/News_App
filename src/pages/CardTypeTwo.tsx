import { useSelector } from "react-redux";
import { RootState } from "../redux/store/AppStore";
import { useNavigate } from "react-router-dom";
import NewsCard from "../components/news-card";

export default function CardTypeTwo ({ query, type }: any) {
  const data: any = useSelector((state: RootState) => state.setdata.data);
  const fetchData = data?.[query] || []; 
  const fetchData2 = data?.[type] || []; 

  const navigate = useNavigate();

  const handleDetailClick = async (item: any) => {
    await localStorage.setItem("Item-Detail", JSON.stringify(item));
    navigate(`/detail/${item.title}`);
  };

  return (
    <div className="flex flex-col md:flex-row my-12">
      <div className="md:w-[70%] justify-center ">
        <NewsCard cardData={ fetchData?.slice(0, 9) } containerStyle="md:grid-cols-3" />
      </div>

      <div className="md:w-[30%] md:ml-4">
        <div className="grid grid-cols-1 gap-6 mb-4 mx-auto">
          { fetchData2?.slice(0, 6)?.map((item: any, index: any) => {
            if (item?.urlToImage) {
              return (
                <div key={ item?.title + item?.description }  onClick={ () => handleDetailClick(item) } className="w-full flex-col md:flex md:flex-row p-2 rounded-md shadow-xl cursor-pointer border-[0.5px]">
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
  );
}