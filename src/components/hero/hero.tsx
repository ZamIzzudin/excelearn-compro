/** @format */

import Button from "../atomic/button";

export default function Hero() {
  return (
    <div
      className="min-w-[99dvw] min-h-[100dvh] text-white flex items-center justify-start px-[10%]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-5 items-start">
        <h1 className="text-[61px] font-[600]">Headline</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Volutpat faucibus facilisis
          sed at pellentesque orci lectus. Ac nisl placerat sed rhoncus libero
          pretium sit non eu. Tempor platea congue suscipit iaculis tellus nibh
          sapien feugiat. Sagittis et nec amet laoreet morbi pretium.
        </p>
        <Button label="Start Consultation" rounded />
      </div>
      <div className="min-w-[50%]"></div>
    </div>
  );
}
