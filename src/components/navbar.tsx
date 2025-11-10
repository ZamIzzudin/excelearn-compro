/** @format */
import Link from "next/link";
import Image from "next/image";

import Promo from "./promo";
import Button from "./atomic/button";

import Logo from "@/assets/logo.png";

export default function Navbar() {
  const isPromo = true;
  return (
    <nav className="sticky top-0 left-0 right-0 z-100">
      <div className="bg-red-500"> {isPromo && <Promo />}</div>
      <div className="flex justify-between text-white items-center px-[10%] !bg-transparent">
        <Image src={Logo} alt="logo" width={0} height={0} />
        <div className="space-x-10 py-5">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/service">Service</Link>
          <Link href="/product">Product</Link>
          <Link href="/schedule">Schedule</Link>
          <Link href="/contact">
            <Button label="Contact Us" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
