import { useEffect } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import CardTypeTwo from "./CardTypeTwo";
import { useNavigate } from "react-router-dom";
import useFetchAPI from "../custom-hook/useFetch";
import HeadLine from "../components/heading";
import { Categories } from "../constants";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/AppStore";
import { GridLoader } from "react-spinners";

function Home() {
  const navigate = useNavigate();
  const { fetchAllData } = useFetchAPI();
  const HandleError: any = useSelector(
    (state: RootState) => state.setdata.error
  );
  const HandleLoading: any = useSelector(
    (state: RootState) => state.setdata.loading
  );

  const HandleClick = (q: string) => {
    navigate(`/categories/${q}`);
  };

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
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col">
          <HeadLine name="Categories Wise News" />
          <div className="flex flex-row overflow-x-scroll">
            {Categories.map((item, index) => (
              <div className="pr-4">
                <button
                  onClick={() => {
                    HandleClick(item.name);
                  }}
                  className="border-2 rounded-xl py-2 px-4 text-sm font-medium "
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        <Cards query={"Top-headline"} />
        <Cards query={"Business"} />
        <Cards query={"Entertainment"} />
        <CardTypeTwo type={"Technology"} query={"Health"} />
      </div>
    </>
  );
}

export default Home;
