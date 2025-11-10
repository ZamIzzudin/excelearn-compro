/** @format */

export default function HeroService() {
  return (
    <div
      className="min-w-[99dvw] min-h-[100dvh] text-white flex items-center justify-start px-[10%]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-8 items-start">
        <h1 className="text-[61px] font-[600]">Our Service</h1>
        <p>
          ExceLEARN adalah penyedia layanan pelatihan bisnis dan IT terkemuka di
          bawah naungan PT. Bina Kinerja Nusantara. Kami berkomitmen untuk
          menghasilkan profesional TI berkualitas tinggi. Sejak tahun 2017, kami
          berkomitmen membantu berbagai perusahaan meningkatkan keterampilan
          teknis dan produktivitas karyawannya.
        </p>
        <div className="w-full text-white flex items-center justify-around">
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
      </div>
    </div>
  );
}
