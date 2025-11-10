/** @format */

export default function Step() {
  return (
    <div className="w-full px-[10%] pt-[5%]">
      <div
        className="text-white rounded-4xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./hero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-[4%] py-[2.5%]">
          <h2 className="text-[49px] font-[600]">Join in 4 Easy Steps</h2>
          <p>
            We’ve simplified the process so you can focus on what matters:
            learning.
          </p>
        </div>
        <div className="bg-white text-black border-x border-b border-[#00AEEF] rounded-b-4xl flex justify-between py-[5%]">
          {[1, 2, 3, 4].map((each: number, index: number) => (
            <div
              className={`flex flex-col items-start gap-3 px-[5%] ${
                index > 0 ? "border-l" : ""
              } border-[#00AEEF]`}
              key={each}
            >
              <span className="text-[35px] font-[600] text-[#00AEEF] border rounded-full w-[50px] h-[50px] flex items-center justify-center">
                {each}
              </span>
              <h4 className="text-[24px]">Join in 5 Easy Steps</h4>
              <p>
                We’ve simplified the process so you can focus on what matters:
                learning.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
