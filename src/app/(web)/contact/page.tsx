/** @format */

"use client";

import Container from "@/components/atomic/container";
import Promo from "@/components/promo";
import CTA from "@/components/cta";
import HeroContact from "@/components/hero/herocontact";
import ContactList from "@/components/contactlist";

import { usePromo } from "@/services/promo/hook";

export default function Contact() {
  const { data: promo, isLoading: promoLoading } = usePromo();

  return (
    <Container>
      <HeroContact />
      <ContactList />
      {promo && (
        <div className="w-full px-[10%] pb-[5%]">
          <Promo size="lg" data={promo} />{" "}
        </div>
      )}
      <CTA />
    </Container>
  );
}
