import { useEffect } from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import CardTypeTwo from "./CardTypeTwo";
import { useNavigate } from "react-router-dom";
import useFetchAPI from "../custom-hook/useFetch";
import HeadLine from "../components/heading";
import { Categories } from "../constants";

function Home () {
  const navigate = useNavigate();
  const { fetchAllData } = useFetchAPI();

  const HandleClick = (q: string) => {
    navigate(`/categories/${q}`);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      <Header />
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col">
          <HeadLine name="Categories Wise News" />
          <div className="flex flex-row overflow-x-scroll">
            { Categories.map((item, index) => (
              <div className="pr-4">
                <button
                  onClick={ () => {
                    HandleClick(item.name);
                  } }
                  className="border-2 rounded-xl py-2 px-4 text-sm font-medium "
                >
                  { item.name }
                </button>
              </div>
            )) }
          </div>
        </div>
        <Cards query={ "Top-headline" } />
        <Cards query={ "Business" } />
        <Cards query={ "Entertainment" } />
        <CardTypeTwo type={ "Science" } query={ "Health" } />
      </div>
    </>
  );
}

export default Home;
