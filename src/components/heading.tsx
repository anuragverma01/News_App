function HeadLine ({ name }: any) {
  return (
    <div className=" flex pr-2 items-center py-8 gap-2 ">
      <p className=" w-1 h-8 bg-red-500"></p>
      <p className=" font-bold md:text-2xl text-xl ">{ name }</p>
    </div>
  );
}

export default HeadLine;
