import type { Metadata } from "next";
import { ToolHero } from "@/components/shared/tool-hero";
import { ToolFeatures } from "@/components/shared/tool-features";
import { ToolBenefits } from "@/components/shared/tool-benefits";
import { ToolCta } from "@/components/shared/tool-cta";
import { FaqSection } from "@/components/ui/faq-section";
import { feeCollectionFaq } from "@/lib/constants/faq";
import { getToolBySlug } from "@/lib/constants/tools";
import { FeeCollectionMockup } from "./mockup";

export const metadata: Metadata = {
  title: "Fee Collection — Track. Collect. Report. | ToolStack",
  description: "Complete fee management for schools and institutes with payment tracking, reminders, reports, and analytics.",
};

const tool = getToolBySlug("fee-collection")!;

const features = [
  { iconName: "Wallet", title: "Fee Tracking", description: "Complete fee structure management with custom categories, installments, and due date tracking." },
  { iconName: "CreditCard", title: "Payment Records", description: "Digital payment records with receipt generation, payment method tracking, and reconciliation." },
  { iconName: "Bell", title: "Due Reminders", description: "Automated email, SMS, and in-app reminders with customizable schedules and messaging templates." },
  { iconName: "FileBarChart", title: "Financial Reports", description: "Detailed reports with filters for date, class, fee type, payment status, and custom parameters." },
  { iconName: "PieChart", title: "Analytics Dashboard", description: "Visual analytics showing collection rates, outstanding amounts, trends, and forecasts." },
  { iconName: "Receipt", title: "Receipt Generation", description: "Auto-generate branded receipts with tax calculations, payment confirmations, and digital signatures." },
];

const benefits = [
  { iconName: "Clock", title: "60% Fewer Late Payments", description: "Automated reminders and easy payment options significantly reduce payment delays." },
  { iconName: "Shield", title: "Complete Audit Trail", description: "Every transaction is tracked with full audit history for compliance and transparency." },
  { iconName: "Users", title: "Parent Portal", description: "Dedicated portal where parents and students can view dues, make payments, and download receipts." },
  { iconName: "TrendingUp", title: "Revenue Insights", description: "Real-time visibility into your institution's financial health with predictive analytics." },
];

export default function FeeCollectionPage() {
  return (
    <>
      <ToolHero {...tool} iconName={tool.icon} mockup={<FeeCollectionMockup />} />
      <ToolFeatures features={features} accentColor={tool.accentColor} title="Complete Fee Management" subtitle="Everything schools and institutes need for seamless fee collection." />
      <ToolBenefits benefits={benefits} accentColor={tool.accentColor} title="Why Fee Collection" />
      <section className="py-32 relative bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display tracking-tight">Frequently Asked Questions</h2>
          </div>
          <FaqSection faqs={feeCollectionFaq} accentColor={tool.accentColor} />
        </div>
      </section>
      <ToolCta name={tool.name} accentColor={tool.accentColor} />
    </>
  );
}
