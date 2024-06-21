import { serviceEndPoints } from "../Networking/end-points";
import { useDispatch } from "react-redux";
import { getData } from "../redux/slice/data";
import { Categories } from "../constants";

export default function useFetchAPI () {
  const dispatch = useDispatch();

  const fetchAllData = async () => {
    let arrayList: any = [];
    Categories.map(async (item, index) => {
      arrayList.push(
        fetch(
          serviceEndPoints.top_HEADLINES + `&q=${item.name}&pageSize=20&page=1`
        ).then((res) => res.json()).catch(error => {
          { return error }
        })
      );
    });
    Promise.all(arrayList).then((res: any) => {
      let dataArray: any = {};
      if (res?.length) {
        Categories.map(async (item, index) => {
          dataArray[item?.name] = res?.[index]?.articles || [];
        });
      }
      dispatch(getData(dataArray));
    }).catch(error => { })
  };

  return { fetchAllData }
}
