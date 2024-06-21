import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BottomPagination from "../components/Pagination";
import useFetchCategory from "../custom-hook/useCategories";
import Header from "../components/Header";
import NewsCard from "../components/news-card";

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
        <div className="flex text-[32px] font-semibold my-8">
          <h1>Category</h1>
          <h1 className="ml-2">{ id }</h1>
        </div>
        <NewsCard cardData={ categoryData } />
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
