import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BottomPagination from "./Pagination";
import useFetchCategory from "../Custom-Hook/useCategories";
import Header from "./Header";

export default function Category ({ query }: any) {
  const [CurrentPage, setCurrentPage] = useState(1);
  const { id }: any = useParams();
  const { fetchCategoryData, categoryData, totalPage } = useFetchCategory();

  useEffect(() => {
    if (id) {
      fetchCategoryData(id, 1);
    }
  }, [id]);

  const onPaginationClicked = (page: number) => {
    setCurrentPage(page);
    fetchCategoryData(id, page);
  };

  return (
    <>
      <Header />
      <div className="w-[90%] mx-auto">
        <div className="flex text-[32px] font-semibold my-4">
          <h1>Category</h1>
          <h1 className="ml-2">{ id }</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 mb-4 mx-auto">
          { categoryData?.map((item: any, index: any) => {
            if (item?.urlToImage) {
              return (
                <div className="w-full p-2 rounded-md shadow-xl cursor-pointer">
                  <img
                    className=" object-cover w-full h-[300px] rounded-lg"
                    src={ item?.urlToImage }
                  />
                  <p className=" px-2 text-justify pt-2 text-[18px] text-black line-clamp-2 font-semibold">
                    { item.title }
                  </p>
                  <p className=" px-2 text-justify my-2 text-[16px] text-gray-800 line-clamp-3">
                    { item.description }
                  </p>
                </div>
              );
            } else {
              return null;
            }
          }) }
        </div>
        <div className="flex justify-end my-12">
          <BottomPagination
            className="pagination-bar"
            currentPage={ CurrentPage }
            totalCount={ totalPage }
            pageSize={ 20 }
            onPageChange={ (page: any) => {
              onPaginationClicked(page);
            } }
          />
        </div>
      </div>
    </>
  );
}
