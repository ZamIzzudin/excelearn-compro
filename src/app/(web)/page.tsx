/** @format */
import Container from "@/components/atomic/container";
import Hero from "@/components/hero/hero";
import AboutSection from "@/components/about";
import PartnerList from "@/components/partnerlist";
import ProductList from "@/components/productlist";
import ScheduleList from "@/components/schedulelist";
import ServiceList from "@/components/servicelist";
import Statistic from "@/components/statistic";
import WhyChoose from "@/components/whychoose";

export default function Home() {
  return (
    <Container>
      <Hero />
      <AboutSection />
      <PartnerList />
      <Statistic />
      <ServiceList />
      <ProductList />
      <ScheduleList />
      <WhyChoose />
    </Container>
  );
}
