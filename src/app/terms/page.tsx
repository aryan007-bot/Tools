import type { Metadata } from "next";
import { TermsContent } from "./terms-content";

export const metadata: Metadata = {
  title: "Terms of Service — ProfitAgentz",
  description: "Read our terms of service to understand legal terms and conditions governing the use of ProfitAgentz services.",
};

export default function TermsPage() {
  return <TermsContent />;
}
