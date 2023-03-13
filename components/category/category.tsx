export default function Category({ label, children }: any) {
  return (
    <div className="w-full flex flex-col p-2 gap-2">
      <h3 className="sticky top-[3.2rem] lg:top-16 z-[2] py-2 bg-white font-semibold text-deep_blue uppercase after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:bg-red after:w-1 after:h-full pl-3 after:rounded-lg text-lg">
        {label}
      </h3>
      <div className="w-full gap-3 flex  overflow-x-scroll snap-x">
        {children}
      </div>
    </div>
  );
}
