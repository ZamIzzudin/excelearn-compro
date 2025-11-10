/** @format */
import Container from "@/components/atomic/container";
import HeroAbout from "@/components/hero/heroabout";
import PartnerList from "@/components/partnerlist";
import ProductList from "@/components/productlist";
import ScheduleList from "@/components/schedulelist";
import ServiceList from "@/components/servicelist";
import Statistic from "@/components/statistic";
import Visi from "@/components/visi";
import WhyChoose from "@/components/whychoose";

export default function About() {
  return (
    <Container>
      <HeroAbout />
      <Visi />
      <PartnerList />
      <Statistic />
      <ServiceList />
      <ProductList />
      <ScheduleList />
      <WhyChoose />
    </Container>
  );
}
