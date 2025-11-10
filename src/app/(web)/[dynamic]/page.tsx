/** @format */
"use client";

import Container from "@/components/atomic/container";
import { useParams } from "next/navigation";

export default function Dynamic() {
  const params = useParams();

  const { dynamic } = params;

  return (
    <Container>
      <h1>{dynamic} Page</h1>
    </Container>
  );
}
