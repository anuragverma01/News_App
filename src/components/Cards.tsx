import { useSelector } from "react-redux";
import { RootState } from "../redux/store/AppStore";
import NewsCard from "./news-card";
import HeadLine from "./heading";

function Cards ({ query }: any) {
  const data: any = useSelector((state: RootState) => state.setdata.data);
  const fetchData = data?.[query] || [];

  return (
    <div>
      <div>
        <div className=" flex items-center justify-between">
          <HeadLine name={ query } />
        </div>
      </div>
      <NewsCard cardData={ fetchData?.slice(0, 4) } />
    </div>
  );
}

export default Cards;
