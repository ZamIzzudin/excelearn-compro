/** @format */

import Tag from "./tag";
import Button from "./button";

interface ScheduleProps {
  data: number;
}

export default function ScheduleCard({ data }: ScheduleProps) {
  return (
    <div className="w-full space-y-2 p-[2%] rounded-xl bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 backdrop-saturate-100 backdrop-contrast-125">
      <div className="flex gap-3">
        <Tag label="On Progress" />
        <span className="text-[12px]">1 July 2025</span>
      </div>
      <div className="max-w-[40%] text-left">
        <h3 className="text-[24px] font-[600] leading-7">
          Online Public Training: Entrepreneurs to Develop Successful Team
        </h3>
      </div>
      <div className="flex justify-between items-end">
        <span className="text-[12px]">ETA: 1 Agustus 2025</span>
        <Button label="Join Class" rounded />
      </div>
    </div>
  );
}
