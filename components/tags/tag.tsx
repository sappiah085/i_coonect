export default function Tag({ pl = "pl-[20%] w-full " }: any) {
  return (
    <div
      className={"z-30 font-Montserrat  left-0 flex  items-center gap-4 " + pl}
    >
      {["All", "Movies", "shorts", "series"].map((label, id) => (
        <button
          style={{ color: id == 0 ? "#FF003C" : "#5C5C5C" }}
          className="uppercase  text-sm font-bold p-1 px-3 bg-grey/95 rounded-3xl"
          key={label}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
