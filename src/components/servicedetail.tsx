/** @format */
"use client";

import { useState } from "react";
import Image from "next/image";

import ServiceBG from "@/assets/hero.png";

interface ServiceProps {
  key: string;
  name: string;
  description: string;
}

const data = [
  {
    key: "it_training",
    name: "IT Training",
    description:
      "ExceLEARN menyediakan pelatihan teknis terkini dalam berbagai bidang IT, dipimpin oleh instruktur ahli dengan pengalaman praktis. Kami juga menawarkan konsultasi karier dan layanan khusus perusahaan untuk memenuhi kebutuhan unik dari setiap peserta kursus dan klien kami.",
  },
  {
    key: "it_consultant",
    name: "IT Consultant",
    description:
      "ExceLEARN menyediakan pelatihan teknis terkini dalam berbagai bidang IT, dipimpin oleh instruktur ahli dengan pengalaman praktis. Kami juga menawarkan konsultasi karier dan layanan khusus perusahaan untuk memenuhi kebutuhan unik dari setiap peserta kursus dan klien kami.",
  },
  {
    key: "it_support",
    name: "IT Support",
    description:
      "ExceLEARN menyediakan pelatihan teknis terkini dalam berbagai bidang IT, dipimpin oleh instruktur ahli dengan pengalaman praktis. Kami juga menawarkan konsultasi karier dan layanan khusus perusahaan untuk memenuhi kebutuhan unik dari setiap peserta kursus dan klien kami.",
  },
];

export default function ServiceDetail() {
  const [selected, setSelected] = useState(data[0]);

  return (
    <div className="pt-[5%] px-[10%] w-full">
      <div className="space-x-8 border-b-2 border-slate-300 pb-3">
        {data.map((each: ServiceProps) => (
          <span
            onClick={() => {
              setSelected(each);
            }}
            key={each.key}
            className={`font-[600] text-[24px] cursor-pointer duration-150 ${
              selected.key === each.key ? "text-black" : "text-slate-300"
            }`}
          >
            {each.name}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-8 mt-3">
        <div className="flex flex-col justify-center">
          <h3 className="font-[600] text-[49px] mb-5">{selected.name}</h3>
          <p className="text-[16px] text-justify">{selected.description}</p>
        </div>
        <div className="p-[10%]">
          <Image
            src={ServiceBG}
            alt="service pict"
            height={0}
            width={0}
            className="rounded-lg shadow-[0px_0px_50px_5px_rgba(0,0,0,0.11)] block"
          />
        </div>
      </div>
    </div>
  );
}
