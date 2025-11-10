/** @format */

import Link from "next/link";

export default function ServiceList() {
  return (
    <div className="px-[10%] py-[5%] text-center w-full space-y-10">
      <h2 className="font-[600] text-[49px]">Services</h2>
      <div className="flex justify-evenly">
        {["IT Training", "IT Consultant", "IT Support"].map((each: string) => (
          <Link
            key={each}
            href="/service"
            className="flex flex-col items-center justify-center gap-3 text-center"
          >
            <span className="bg-[#00AEEF] w-[150px] h-[150px] block rounded-md"></span>
            <span className="text-[24px]">{each}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
