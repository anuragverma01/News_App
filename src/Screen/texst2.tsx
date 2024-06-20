import React from "react";
import Test from "./test";

function Texst2() {
  return (
    <div id="BlogsDiv" className=" scroll-mt-20">
      <div className="max-w-screen-xl mx-auto justify-center items-center py-16 ">
        <div className="flex flex-wrap mt-5 ">
          {[1, 2, 3, 4]?.map((item: any) => (
            <Test key={item?._id} />
          ))}
        </div>
        {
          <div className="flex justify-center mt-8  ">
            <button
              // onClick={ () => router.push("/blogs/list") }
              className="flex items-center bg-gradient-to-r from-[#CB7300] to-[#FF9E1E] text-white font-medium py-3 px-12 rounded-[100px] transparent border-solid border-2 border-white text-[22px] font-poppins"
            >
              View All Blogs
            </button>
          </div>
        }
      </div>
    </div>
  );
}

export default Texst2;
