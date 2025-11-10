/** @format */

export default function PartnerList() {
  return (
    <div className="w-full text-center py-[5%]">
      <h2 className="font-[600] text-[49px]">Partners</h2>
      <h3 className="text-[20px] font-[600]">
        Over 17,200 companies grow their teams with ExceLEARN
      </h3>
      <div className="flex w-full items-center justify-center gap-5 mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((each: number) => (
          <span
            key={each}
            className="flex items-center justify-center w-[75px] h-[75px] bg-slate-200 rounded-md"
          >
            {each}
          </span>
        ))}
      </div>
    </div>
  );
}
