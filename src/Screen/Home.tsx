import React, { useEffect } from "react";
import Cards from "./Cards";
import Carsouals from "./Carsouals";
import Header from "./Header";
import { serviceEndPoints } from "../Networking/end-points";

function Home() {
  const Categories = [
    {
      id: 0,
      name: "Top Headlines",
    },
    { id: 1, name: "Buniness" },
    {
      id: 2,
      name: "Entertainment",
    },
    {
      id: 3,
      name: "Health",
    },
    {
      id: 4,
      name: "Science",
    },
    {
      id: 5,
      name: "Sports",
    },
    {
      id: 6,
      name: "Technology",
    },
  ];
  return (
    <>
      <Header />
      <div className=" flex flex-col mx-10">
        <div className=" flex px-2 items-center py-5 gap-2 ">
          <p className=" w-1 h-8 bg-red-500"></p>

          <p className=" md:text-2xl text-xl font-bold">Categories Wise News</p>
        </div>
        <div className=" flex flex-row overflow-x-scroll">
          {Categories.map((item, index) => (
            <div className="px-2">
              <button className=" border-2 rounded-xl p-2 text-sm md:text-base  font-medium">
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Cards query={"top-headlines"} />
      <Carsouals />

      <Cards />
      <div className=" md:flex my-10  ">
        <div className="   h-full w-full flex  flex-col p-2 gap-4 ">
          {[1, 2, 3, 4, 5, 6].splice(0, 4).map(() => (
            <div className="flex w-full h-auto gap-4  flex-col md:flex-row justify-center ">
              <div className=" w-full md:max-w-[350px] h-full   ">
                <img
                  className=" w-full h-full object-cover rounded-xl"
                  src="https://ichef.bbci.co.uk/news/1024/branded_news/ce48/live/3b1127f0-2e31-11ef-a044-9d4367d5b599.png"
                />
                <p className=" font-bold text-base md:text-lg text-balance px-2">
                  Caitlin Clark'sdouble-double pushes Fever by Mystics
                  third-straight win - New York Post
                </p>
              </div>
              <div className=" w-full md:max-w-[350px] h-full">
                <img
                  className=" w-full h-full object-cover rounded-xl"
                  src="https://media.breitbart.com/media/2024/06/mitt-romney-chuck-shumer-us-embassy-jerusalem-file23-flickr-640x335.jpg"
                />
                <p className=" font-bold text-lg text-balance px-2">
                  Caitlin Clark'sdouble-double pushes Fever by Mystics for
                  third-straight win - New York Post
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="  basis-4/5 h-full w-full flex  ">
          <div className="  h-full w-full flex  flex-col p-2 gap-4  ">
            {[1, 2, 3, 4].map(() => (
              <div className="flex w-full p-2 rounded-xl h-auto gap-4  flex-col md:flex-row shadow-xl  transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110  duration-500 ">
                <div className=" w-full  md:w-[500px] md:h-56  h-full   rounded-xl  ">
                  <img
                    className=" w-full h-full object-cover lg:rounded-xl "
                    src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0620%2Fr1348073_1296x729_16%2D9.jpg"
                  />
                </div>
                <div className=" flex flex-col px-5 ">
                  <p className=" font-bold">
                    "Behind Justin Lamkin's five scoreless innings, Texas A&M
                    shut down Florida 6-0 to advance to the Men's College World
                    Series finals, where they will face Tennesseei
                  </p>
                  <p className=" font-normal text-sm md:text-base text-justify">
                    Texas A&amp;M is going to play for a national championship
                    in baseball for the first time in its program's 130-year
                    history.\r\nJim Schlossnagle had a breakthr… [+3816 chars]
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
