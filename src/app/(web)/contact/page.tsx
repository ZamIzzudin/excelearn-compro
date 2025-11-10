/** @format */
import Container from "@/components/atomic/container";
import Promo from "@/components/promo";
import CTA from "@/components/cta";
import HeroContact from "@/components/hero/herocontact";
import ContactList from "@/components/contactlist";

export default function Contact() {
  return (
    <Container>
      <HeroContact />
      <ContactList />
      <div className="w-full px-[10%] pb-[5%]">
        <Promo size="lg" />
      </div>
      <CTA />
    </Container>
  );
}
