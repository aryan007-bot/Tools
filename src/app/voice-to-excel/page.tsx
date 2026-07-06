import type { Metadata } from "next";
import { ToolHero } from "@/components/shared/tool-hero";
import { ToolFeatures } from "@/components/shared/tool-features";
import { ToolBenefits } from "@/components/shared/tool-benefits";
import { ToolCta } from "@/components/shared/tool-cta";
import { FaqSection } from "@/components/ui/faq-section";
import { voiceToExcelFaq } from "@/lib/constants/faq";
import { getToolBySlug } from "@/lib/constants/tools";
import { VoiceToExcelMockup } from "./mockup";

export const metadata: Metadata = {
  title: "Voice To Excel — Speak. Transcribe. Export. | ToolStack",
  description: "Convert spoken voice into structured Excel sheets automatically with real-time transcription and intelligent data categorization.",
};

const tool = getToolBySlug("voice-to-excel")!;

const features = [
  { iconName: "Mic", title: "Voice Recording", description: "Record with built-in noise cancellation. Supports long-form audio with automatic pause detection." },
  { iconName: "AudioLines", title: "Real-time Transcription", description: "Watch your words appear as text instantly with 95%+ accuracy across multiple languages." },
  { iconName: "Table", title: "Excel Generation", description: "Automatically structure transcribed data into organized rows, columns, and sheets." },
  { iconName: "Brain", title: "Smart Categorization", description: "AI identifies data types and categories — numbers, dates, names, amounts — automatically." },
  { iconName: "Download", title: "One-click Export", description: "Export to XLSX, CSV, or Google Sheets with a single click. No formatting needed." },
  { iconName: "FileSpreadsheet", title: "Template Support", description: "Use custom templates or let AI suggest the best structure for your data type." },
];

const benefits = [
  { iconName: "Clock", title: "Save Hours Weekly", description: "Eliminate manual data entry. What took hours now takes minutes." },
  { iconName: "Zap", title: "Instant Productivity", description: "Start recording and get a structured spreadsheet in real-time." },
  { iconName: "Shield", title: "Enterprise Accuracy", description: "95%+ transcription accuracy with continuous learning and improvement." },
  { iconName: "BarChart3", title: "Data-Ready Output", description: "Generated Excel files are immediately ready for analysis, reporting, or sharing." },
];

export default function VoiceToExcelPage() {
  return (
    <>
      <ToolHero {...tool} iconName={tool.icon} mockup={<VoiceToExcelMockup />} />
      <ToolFeatures features={features} accentColor={tool.accentColor} title="Built for Productivity" subtitle="Every feature designed to make voice-to-data conversion seamless." />
      <ToolBenefits benefits={benefits} accentColor={tool.accentColor} title="Why Voice To Excel" />
      <section className="py-32 relative bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display tracking-tight">Frequently Asked Questions</h2>
          </div>
          <FaqSection faqs={voiceToExcelFaq} accentColor={tool.accentColor} />
        </div>
      </section>
      <ToolCta name={tool.name} accentColor={tool.accentColor} />
    </>
  );
}
