import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BottomPagination from "../components/Pagination";
import useFetchCategory from "../custom-hook/useCategories";
import Header from "../components/Header";
import NewsCard from "../components/news-card";
import { GridLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/AppStore";


export default function Category ({ query }: any) {
  const [CurrentPage, setCurrentPage] = useState(1);
  const { id }: any = useParams();
  const { fetchCategoryData, categoryData, totalPage } = useFetchCategory();
  const HandleError: any = useSelector(
    (state: RootState) => state.setdata.error
  );
  const HandleLoading: any = useSelector(
    (state: RootState) => state.setdata.loading
  );
  useEffect(() => {
    if (id) {
      fetchCategoryData(id, 1);
    }
  }, [id]);

  const onPaginationClicked = (page: number) => {
    setCurrentPage(page);
    fetchCategoryData(id, page);
  };
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