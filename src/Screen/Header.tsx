import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
function Header() {
  return (
    <div className=" bg-[#E2E2E3]">
      <div className=" flex justify-between items-center py-4 md:px-8 px-3">
        <div>
          <p className=" text-[#FF0000] font-bold md:text-2xl text-xl">
            News24
          </p>
        </div>

        <div className="  flex relative items-center ">
          <div>
            <input className=" py-1 w-40 pl-4 pr-10 rounded-xl md:py-2 md:w-[80%] border-none " />
          </div>
          <div className=" absolute right-2">
            <IoMdSearch />
          </div>
        </div>
        {/* <div className="w-2/3 flex justify-end items-center relative">
          <input
            placeholder="Pesquisar"
            className="border border-gray-400 rounded-lg p-4 w-full"
          />
          <img
            src="/icons/search.svg"
            className="absolute mr-2 w-10"
            alt="Search Icon"
          />
        </div> */}

        <div className=" w-10 h-10 bg-gray-600 rounded-full items-center flex justify-center">
          <FaUserAlt size={20} />
        </div>
      </div>
    </div>
  );
}

export default Header;
