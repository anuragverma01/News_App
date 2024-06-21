import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/AppStore";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import BottomPagination from "./Pagination";
import useFetchCategory from "../Custom-Hook/useCategories";

export default function Category({ query }: any) {
  const [CurrentPage, setCurrentPage] = useState(1);
  const { id }: any = useParams();
  console.log("PARAMSAS DAAT", id);
  const { fetchCategoryData, categoryData, totalPage } = useFetchCategory();
  // console.log("DATA FROM SELECTOR ~~~~~~~~~~~~", id, data?.[id]);
  console.log("categoryData", categoryData);

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
    <div>
      <div className=" flex gap-2 font-bold text-2xl p-5 px-10">
        <h1>Category</h1>
        <h1>{id}</h1>
      </div>
      <div className=" md:flex gap-5  flex-wrap">
        {categoryData?.map((item: any, index: any) => {
          if (item?.urlToImage) {
            return (
              <div className="w-full md:h-min-[200px] md:max-w-[350px] p-2 bg-white rounded-md my-5 md:my-0 shadow-lg  ">
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

      <div className="flex justify-end mt-4 mb-8 bg-slate-800">
        <BottomPagination
          className="pagination-bar"
          currentPage={CurrentPage}
          totalCount={totalPage}
          pageSize={20}
          onPageChange={(page: any) => {
            onPaginationClicked(page);
          }}
        />
      </div>
    </div>
  );
}
