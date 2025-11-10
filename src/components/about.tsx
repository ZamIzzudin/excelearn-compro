/** @format */

import Image from "next/image";

import AboutPict from "@/assets/testimoni.jpg";
import Button from "./atomic/button";

export default function AboutSection() {
  return (
    <div className="px-[10%] py-[5%] grid grid-cols-2 w-full gap-10">
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
          ExceLEARN adalah pusat pengembangan SDM, teknologi, dan solusi bisnis
          yang berdedikasi untuk membantu organisasi meningkatkan produktivitas
          dan beradaptasi di era transformasi digital. Kami menghadirkan
          pelatihan IT, layanan IT managed service, serta solusi teknologi
          terintegrasi yang dirancang khusus sesuai kebutuhan klien.
        </p>
        <Button label="Get to Know Us" rounded />
      </div>
    </div>
  );
}
