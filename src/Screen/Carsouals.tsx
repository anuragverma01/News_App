import React from "react";

function Carsouals() {
  return (
    <div className=" px-10  ">
      <div className=" flex px-2 items-center py-5 gap-2">
        <p className=" w-1 h-8 bg-red-500"></p>
        <p className=" font-bold text-2xl my-5">Full Story</p>
      </div>

      <div className=" md:flex gap-5  flex-wrap">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <div className="w-full h-full md:max-w-[500px] p-2 bg-white rounded-md my-5 md:my-0 shadow-lg  ">
            <img
              className=" object-cover w-full h-full rounded-lg"
              src="https://cdn.mos.cms.futurecdn.net/H7pxJnSUSSLBy3dNadjs7M-1200-80.jpg"
            />
            <p className=" px-2 text-justify py-2 text-base font-medium md:text-lg">
              Lockdown mode requires a PIN or password to unlock your phone the
              next time it's used. Know how to do it and why you might want to
              before you need it.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carsouals;
