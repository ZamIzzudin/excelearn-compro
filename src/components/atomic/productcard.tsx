/** @format */

import Image from "next/image";

import Tag from "./tag";

import HeroBG from "@/assets/hero.png";

interface ProductProps {
  data: number;
}

export default function ProductCard({ data }: ProductProps) {
  return (
    <div className="rounded-md overflow-hidden shadow-[0px_0px_50px_5px_rgba(0,0,0,0.11)]">
      <Image src={HeroBG} alt="product pict" height={0} width={0} />
      <div className="p-[5%]">
        <div className="flex justify-between items-center pb-8 border-b-2 border-[#00AEEF]">
          <h3 className="text-[24px] font-[600]">Power BI Training</h3>
          <Tag label="IT Training" />
        </div>
        <div className="flex justify-between pt-3">
          <div className="flex items-center gap-2">
            <span className="w-[25px] h-[25px] rounded-full bg-slate-200 block"></span>
            <span className="text-[12px]">Lara</span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-[12px]">All Levels</span>
            <span className="text-[12px]">500</span>
          </div>
        </div>
      </div>
    </div>
  );
}
