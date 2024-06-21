import { useNavigate } from "react-router-dom";

function NewsCard ({ cardData, containerStyle, cardStyle, imgStyle }: any) {
  const navigate = useNavigate();

  const handleDetailClick = async (item: any) => {
    await localStorage.setItem("Item-Detail", JSON.stringify(item));
    navigate(`/detail/${item.title}`);
  };

  return (
    <div>
      <div className={ `grid grid-cols-1 md:grid-cols-4 gap-8 mb-4 mx-auto ${containerStyle}` }>
        { cardData?.map((item: any, index: any) => (
          <div key={ item?.title + item?.description } onClick={ () => { handleDetailClick(item) } } className={ `w-full p-2 rounded-md shadow-xl cursor-pointer ${cardStyle}` }>
            <img
              className={ `object-cover w-full h-[300px] rounded-lg ${imgStyle}` }
              src={ item?.urlToImage }
            />
            <p className=" px-2 text-justify pt-2 text-[18px] text-black line-clamp-2 font-semibold">
              { item.title }
            </p>
            <p className=" px-2 text-justify my-2 text-[16px] text-gray-800 line-clamp-3">
              { item.description }
            </p>
          </div>
        )) }
      </div>
    </div>
  );
}

export default NewsCard;
