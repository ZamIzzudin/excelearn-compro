/** @format */

import Button from "./atomic/button";
import TestimoniCard from "./atomic/testimonicard";

export default function TestimoniList() {
  return (
    <div className="text-black w-full px-[10%]">
      <div className="p-[5%] bg-white rounded-t-3xl">
        <h2 className="font-[600] text-[49px] mb-10">What They Say About Us</h2>
        <div className="flex items-center justify-center py-5">
          <TestimoniCard />
        </div>
        <div className="flex items-center justify-center gap-3">
          <button className="border-[#00AEEF] text-[#00AEEF] border-2 text-[24px] leading-0 w-[40px] h-[40px] flex items-center justify-center rounded-full">
            {"<"}
          </button>
          <button className="border-[#00AEEF] text-[#00AEEF] border-2 text-[24px] leading-0 w-[40px] h-[40px] flex items-center justify-center rounded-full">
            {">"}
          </button>
        </div>
      </div>
      <div className="bg-red-500 flex justify-between text-white items-center px-[5%] z-100 rounded-xl text-left">
        <div>
          <h1 className="text[20px] font-[600]">
            🚀 Boost Your Team with 50% OFF!
          </h1>
          <p className="text-[16px]">
            Enhance your team’s performance with professional training at half
            the investment.
          </p>
        </div>
        <div className="py-5 flex items-center gap-5">
          <div className="flex gap-2">
            <div className="flex flex-col items-center">
              <span className="text-[24px] font-[600]">02</span>
              <span className="text-[10px]">Hours</span>
            </div>
            <div>
              <span className="text-[24px] font-[600]">:</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[24px] font-[600]">05</span>
              <span className="text-[10px]">Mins</span>
            </div>
            <div>
              <span className="text-[24px] font-[600]">:</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[24px] font-[600]">47</span>
              <span className="text-[10px]">Secs</span>
            </div>
          </div>
          <Button label="Grab The Deal" rounded />
        </div>
      </div>
    </div>
  );
}
