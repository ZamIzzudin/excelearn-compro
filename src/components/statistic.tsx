/** @format */

export default function Statistic() {
  return (
    <div
      className="w-full py-[3%] px-[10%] text-white flex items-center justify-evenly"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-[49px] font-[700]">10+</span>
        <span className="text-[16px]">Years Experience</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-[49px] font-[700]">50K+</span>
        <span className="text-[16px]">Participants</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-[49px] font-[700]">500+</span>
        <span className="text-[16px]">Topics</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-[49px] font-[700]">4K+</span>
        <span className="text-[16px]">Training Completed</span>
      </div>
    </div>
  );
}
