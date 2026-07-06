import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About Us — ToolStack",
  description: "Learn about ToolStack's mission to unify business tools into one powerful platform.",
};

export default function AboutPage() {
  return <AboutContent />;
}
