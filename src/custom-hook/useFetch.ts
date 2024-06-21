import { serviceEndPoints } from "../Networking/end-points";
import { useDispatch } from "react-redux";
import { getData, setError, setLoading } from "../redux/slice/data";
import { Categories } from "../constants";

export default function useFetchAPI() {
  const dispatch = useDispatch();

  const fetchAllData = async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    let arrayList: any = [];
    Categories.map(async (item, index) => {
      arrayList.push(
        fetch(
          serviceEndPoints.top_HEADLINES + `&q=${item.name}&pageSize=20&page=1`
        )
          .then((res) => res.json())
          .catch((error) => {
            {
              return error;
            }
          })
      );
    });
    Promise.all(arrayList)
      .then((res: any) => {
        let dataArray: any = {};
        if (res?.length) {
          Categories.map(async (item, index) => {
            dataArray[item?.name] = res?.[index]?.articles || [];
          });
        }
        dispatch(getData(dataArray));
        dispatch(setLoading(false));
      })
      .catch((error) => {
        dispatch(setError("Failed to fetch data"));
        dispatch(setLoading(false));
      });
  };

  return { fetchAllData };
}
