import React from "react";

function Test() {
  return (
    <div
      data-aos="zoom-in"
      className="w-full md:w-1/2 lg:my-2 lg:px-4 lg:w-1/3 px-4 py-2 "
    >
      <div
        //   onClick={() => router.push(/blogs/${blog?._id})}
        className="group min-h-[415px] rounded-lg bg-teal-600 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 ease-out hover:-translate-y-3 duration-500 cursor-pointer-0 "
      >
        <img
          src="https://www.hindustantimes.com/ht-img/img/2024/06/18/1600x900/haris_indian_fan_1718703795654_1718703804611.jpg"
          className="h-auto w-full group-hover:grayscale-[.8] rounded-lg bg-gray-100 scale-100 aspect-[5/4]"
          width={400}
          height={250}
          alt="Flowbite Logo"
        />
        <div className="mt-7 relative cursor-pointer">
          <h5 className="mb-2 text-[14px] text-[#171717] font-poppins font-semibold line-clamp-1">
            BKKNNGNKGNKNG
          </h5>
          <p className="mb-4 text-[12px] text-[#464646] font-poppins line-clamp-2">
            FNKNGNGJNGJNGLNGNJKGNNKGM
          </p>
          <div className="flex justify-between">
            <p className="text-[12px] text-[#5A5A5A] font-poppins">
              {/* {moment(blog?.updatedAt).format("DD MMMM, YYYY")} */}
            </p>
            <div>
              {/* <Link */}
              {/* href={/blogs/${blog?._id}} */}
              {/* className="text-[14px] text-[#0D5693] font-poppins font-semibold" */}
              {/* > */}
              READ MORE
              {/* </Link> */}
            </div>
          </div>
          <div className="hidden group-hover:block absolute -top-[56px] left-1/2 transform -translate-x-1/2 cursor-pointer">
            <div className="bg-gradient-to-r from-[#CB7300] to-[#FF9E1E] h-14 w-14 rounded-full justify-center items-center flex shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <svg
                className="w-8 h-8 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
