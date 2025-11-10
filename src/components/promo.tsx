/** @format */

import Button from "./atomic/button";

export default function Promo({ size = "md" }: { size?: string }) {
  return (
    <div className="bg-red-500 flex justify-between text-white items-center px-[5%] z-100 rounded-lg">
      <div className={`${size === "lg" ? "space-y-2" : "space-y-0"}`}>
        <h1
          className={`${
            size === "lg" ? "text-[24px]" : "text-[20px]"
          } font-[600]`}
        >
          🚀 Boost Your Team with <span className="font-[700]">50% OFF!</span>
        </h1>
        <p className="text-[16px] font-[200]">
          Enhance your team’s performance with professional training at half the
          investment.
        </p>
      </div>
      <div
        className={`py-5 flex items-center gap-5 ${
          size === "lg" ? "flex-col" : ""
        }`}
      >
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
  );
}
