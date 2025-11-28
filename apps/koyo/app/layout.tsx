
"use client";
import { st } from "@koyo/client";
import { System } from "@akanjs/ui";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return <System.Root st={st}>{children}</System.Root>;
}
  