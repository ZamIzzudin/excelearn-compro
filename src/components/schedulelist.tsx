/** @format */

import Button from "./atomic/button";
import ScheduleCard from "./atomic/schedulecard";
import TestimoniList from "./testimonilist";

export default function ScheduleList() {
  return (
    <div
      className="w-full text-white flex flex-col items-center justify-center text-center py-[3%] space-y-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 20%, rgba(255,255,255) 85%), url('./hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="font-[600] text-[49px] mb-10">Running Schedule</h2>
      <div className="flex flex-col w-full px-[10%] gap-5 mb-8">
        {[1, 2, 3].map((each: number, index: number) => (
          <ScheduleCard key={index} data={each} />
        ))}
      </div>
      <Button label="Load More" rounded />
      <TestimoniList />
    </div>
  );
}
