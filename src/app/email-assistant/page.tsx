import type { Metadata } from "next";
import { ToolHero } from "@/components/shared/tool-hero";
import { ToolFeatures } from "@/components/shared/tool-features";
import { ToolBenefits } from "@/components/shared/tool-benefits";
import { ToolCta } from "@/components/shared/tool-cta";
import { FaqSection } from "@/components/ui/faq-section";
import { emailAssistantFaq } from "@/lib/constants/faq";
import { getToolBySlug } from "@/lib/constants/tools";
import { EmailAssistantMockup } from "./mockup";

export const metadata: Metadata = {
  title: "Email Assistant — Draft. Refine. Send. | ToolStack",
  description: "Generate, improve, and automate emails with AI drafts, smart replies, tone adjustment, templates, and scheduling.",
};

const tool = getToolBySlug("email-assistant")!;

const features = [
  { iconName: "PenTool", title: "Draft Generation", description: "AI writes complete email drafts from just a few keywords or a brief description of what you need." },
  { iconName: "MessageSquare", title: "Smart Replies", description: "Context-aware suggested replies that understand the conversation thread and respond appropriately." },
  { iconName: "SlidersHorizontal", title: "Tone Adjustment", description: "Shift tone between professional, casual, friendly, assertive, or empathetic with one click." },
  { iconName: "LayoutTemplate", title: "Email Templates", description: "Pre-built templates for common scenarios — follow-ups, introductions, proposals, announcements." },
  { iconName: "CalendarClock", title: "Send Scheduling", description: "Schedule emails for the perfect time with smart timing suggestions based on recipient patterns." },
  { iconName: "Mail", title: "Multi-Account", description: "Manage multiple email accounts from one interface. Gmail, Outlook, and any IMAP provider." },
];

const benefits = [
  { iconName: "Clock", title: "Write 5x Faster", description: "Turn a 30-minute email task into a 5-minute review. Spend time on strategy, not typing." },
  { iconName: "Zap", title: "Consistent Quality", description: "Every email maintains professional standards while reflecting your personal communication style." },
  { iconName: "Shield", title: "Privacy First", description: "Your emails are processed in real-time and never stored or used for training. Full GDPR compliance." },
  { iconName: "Globe", title: "Multi-Language", description: "Draft and translate emails across 25+ languages while maintaining natural tone and context." },
];

export default function EmailAssistantPage() {
  return (
    <>
      <ToolHero {...tool} iconName={tool.icon} mockup={<EmailAssistantMockup />} />
      <ToolFeatures features={features} accentColor={tool.accentColor} title="Email Superpowers" subtitle="Transform how you write, send, and manage emails." />
      <ToolBenefits benefits={benefits} accentColor={tool.accentColor} title="Why Email Assistant" />
      <section className="py-32 relative bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display tracking-tight">Frequently Asked Questions</h2>
          </div>
          <FaqSection faqs={emailAssistantFaq} accentColor={tool.accentColor} />
        </div>
      </section>
      <ToolCta name={tool.name} accentColor={tool.accentColor} />
    </>
  );
}
