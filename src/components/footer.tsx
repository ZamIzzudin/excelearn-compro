/** @format */

import Link from "next/link";

import Button from "./atomic/button";

export default function Footer() {
  return (
    <footer className="bg-[#00AEEF] min-w-[99dvw] text-white grid grid-cols-2 px-[10%] py-[5%]">
      <div className="flex flex-col gap-5 items-start">
        <h2 className="font-[600] text-[49px]">Need Help Deciding?</h2>
        <p className="text-[20px]">
          Chat with us and make decisions with confidence.
        </p>
        <Button label="Start Consultation" rounded />
        <div className="flex gap-5 mt-5">
          {[1, 2].map((each: number) => (
            <span
              key={each}
              className="flex rounded-full bg-white w-[75px] h-[75px] items-center justify-center"
            >
              {each}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h5 className="font-[600] text-[25px]">Follow Us</h5>
        <div className="flex gap-4">
          {[1, 2, 3, 4, 5, 6, 7].map((each: number) => (
            <span
              key={each}
              className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center"
            >
              {each}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2 space-y-3">
            <h5 className="font-[600] text-[25px]">Excelearn</h5>
            <span className="block">PT. Bina Kinerja Nusantara</span>
            <span className="block">
              Equity Tower, 26th Floor, Unit H<br />
              Jl. Jenderal Sudirman Kav. 52 Senayan,
              <br />
              South Jakarta 12190
              <br /> Indonesia
            </span>
            <div className="flex flex-col">
              <span className="font-[500]">Email :</span>
              <span>excelearn@gmail.com</span>
            </div>
            <div className="flex flex-col">
              <span className="font-[500]">Website :</span>
              <span>Excelearn.ac.id</span>
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="font-[600] text-[25px]">Services</h5>
            <div className="flex flex-col gap-3">
              {["IT Training", "IT Consultant", "IT Support"].map(
                (each: string) => (
                  <span key={each}>
                    <Link href="/service">{each}</Link>
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
