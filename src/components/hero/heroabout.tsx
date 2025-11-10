/** @format */

import Image from "next/image";

import Button from "../atomic/button";

import AboutPict from "@/assets/testimoni.jpg";

export default function HeroAbout() {
  return (
    <div
      className="min-w-[99dvw] min-h-[100dvh] text-white flex items-center justify-start px-[10%]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-[10%] py-[5%] rounded-lg grid grid-cols-2 w-full gap-10  bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 backdrop-saturate-100 backdrop-contrast-125">
        <div className="flex items-center justify-center">
          <Image
            src={AboutPict}
            alt="testimoni pict"
            height={200}
            width={200}
            className="rounded-lg"
          />
          <Image
            src={AboutPict}
            alt="testimoni pict"
            height={200}
            width={200}
            className="rounded-lg"
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-[49px] font-[600]">
            About <span className="text-[#00AEEF]">ExceLEARN</span>
          </h2>
          <p>
            ExceLEARN adalah pusat pengembangan SDM, teknologi, dan solusi
            bisnis yang berdedikasi untuk membantu organisasi meningkatkan
            produktivitas dan beradaptasi di era transformasi digital. Kami
            menghadirkan pelatihan IT, layanan IT managed service, serta solusi
            teknologi terintegrasi yang dirancang khusus sesuai kebutuhan klien.
          </p>
          <Button label="Get to Know Us" rounded />
        </div>
      </div>
    </div>
  );
}
