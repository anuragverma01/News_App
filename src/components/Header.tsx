import { IoMdSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
function Header () {
  return (
    <div className=" bg-[#E2E2E3]">
      <div className=" flex justify-between items-center py-4 md:px-8 px-3">
        <div>
          <p className=" text-[#FF0000] font-bold md:text-2xl text-xl">
            News24
          </p>
        </div>
        <div className="flex relative items-center ">
          <div className="flex relative md:w-[450px] md:mx-0 mx-2">
            <input className="flex pl-4 pr-8 rounded-xl py-2 w-full border-none " />
            <div className="absolute right-2 top-2">
              <IoMdSearch size={24} />
            </div>
          </div>
        </div>
        <div>
          <div className="w-10 h-10 bg-gray-600 rounded-full items-center flex justify-center">
            <FaUserAlt size={ 20 } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
