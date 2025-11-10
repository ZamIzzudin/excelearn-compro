/** @format */

import Image from "next/image";
import Link from "next/link";

import ContactBG from "@/assets/testimoni.jpg";

export default function ContactList() {
  return (
    <div className="w-full px-[10%] py-[5%] space-y-10">
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-[49px] font-[600]">Lets Talk!</h3>
          <p className="max-w-[50%]">
            Get In Touch with us using the enquiry form of contact details below
          </p>
          <div className="flex flex-col items-start gap-3 mt-8">
            {[
              "Excelearn@gmail.com",
              "+62984201810",
              "Equity Tower 26th Floor",
            ].map((each: string, index: number) => (
              <div
                className="bg-gradient-to-r from-[#141A2E] to-[#76dbff] text-white p-5 rounded-full min-w-[40%]"
                key={index}
              >
                {each}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Image
            src={ContactBG}
            alt="contact bg"
            height={350}
            width={350}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="text-center space-y-5 py-[5%]">
        <h3 className="font-[600] text-[49px]">Follow Us</h3>
        <div className="flex items-center justify-center gap-8">
          {[1, 2, 3, 4, 5, 6, 7].map((each: number) => (
            <div key={each} className="w-[50px] h-[50px] bg-slate-200"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
