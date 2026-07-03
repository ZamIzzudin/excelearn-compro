/** @format */
"use client";

import dynamic from "next/dynamic";

import "@/styles/disco-taco-report.css";

const DiscQuestionnaire = dynamic(
  () => import("@/components/disco-taco/DiscQuestionnaire"),
  { ssr: false },
);

export default function DiscTacoPage() {
  return <DiscQuestionnaire />;
}
