/** @format */

import Image from "next/image";

import TestimoniPict from "@/assets/testimoni.jpg";

export default function TestimoniCard() {
  return (
    <div className="bg-white max-w-[60%] flex items-center shadow-[0px_0px_50px_5px_rgba(0,0,0,0.11)] rounded-xl p-5 gap-3">
      <Image
        src={TestimoniPict}
        alt="testimoni pict"
        height={150}
        width={150}
        className="rounded-lg"
      />
      <div className="space-y-3 p-5">
        <p className="text-justify">
          “This class gave me hands-on experience that I couldn’t get just from
          theory. It’s definitely worth the investment.”
        </p>
        <span className="w-full block text-left text-[12px] italic">
          <strong>John</strong> - Marketing Director
        </span>
      </div>
    </div>
  );
}
