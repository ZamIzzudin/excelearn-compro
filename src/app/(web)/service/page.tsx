/** @format */
import Container from "@/components/atomic/container";
import CTA from "@/components/cta";
import HeroService from "@/components/hero/heroservice";
import ProductList from "@/components/productlist";
import ServiceDetail from "@/components/servicedetail";
import Step from "@/components/step";

export default function Service() {
  return (
    <Container>
      <HeroService />
      <ServiceDetail />
      <Step />
      <ProductList />
      <CTA />
    </Container>
  );
}
