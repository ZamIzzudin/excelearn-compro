/** @format */

export default function WhyChoose() {
  return (
    <div className="px-[10%] min-w-[99dvw] py-[5%] flex items-center gap-20">
      <div>
        <h2 className="text-[61px] font-[600] leading-[1]">
          Why
          <br />
          Choose
          <br />
          <span className="text-[#00AEEF]">ExceLEARN?</span>
        </h2>
      </div>
      <div className="flex flex-col gap-3 flex-1">
        {[
          "Layanan Lengkap & Terintegrasi",
          "Kustom Sesuai Kebutuhan",
          "Profesional & Berpengalaman",
        ].map((each: string, index: number) => (
          <div
            className="flex gap-5 white rounded-full px-5 py-3 items-center shadow-[0px_0px_50px_5px_rgba(0,0,0,0.11)]"
            key={index}
          >
            <div className=" flex items-center justify-center text-[24px] font-[600] text-[#00AEEF] border-2 rounded-full border-[#00AEEF] h-[50px] aspect-square">
              {index + 1}
            </div>
            <span className="text-[24px] font-[600]">{each}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
