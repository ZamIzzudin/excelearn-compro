/** @format */

import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col min-w-[99dvw] min-h-[100dvh] items-center mt-[-5%]">
      {children}
    </main>
  );
}
