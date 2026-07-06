import type { Metadata } from "next";
import { ToolHero } from "@/components/shared/tool-hero";
import { ToolFeatures } from "@/components/shared/tool-features";
import { ToolBenefits } from "@/components/shared/tool-benefits";
import { ToolCta } from "@/components/shared/tool-cta";
import { FaqSection } from "@/components/ui/faq-section";
import { testGeneratorFaq } from "@/lib/constants/faq";
import { getToolBySlug } from "@/lib/constants/tools";
import { TestGeneratorMockup } from "./mockup";

export const metadata: Metadata = {
  title: "Test Generator — Generate. Assess. Excel. | ToolStack",
  description: "Create tests, quizzes, and question papers automatically with AI-powered generation, difficulty scaling, and PDF export.",
};

const tool = getToolBySlug("test-generator")!;

const features = [
  { iconName: "FileQuestion", title: "Question Generation", description: "AI creates diverse question types — MCQ, short answer, true/false, fill-in-the-blank — from any topic." },
  { iconName: "Sliders", title: "Difficulty Selection", description: "Set difficulty from beginner to expert. AI adjusts complexity, vocabulary, and concept depth accordingly." },
  { iconName: "BookOpen", title: "Multi-Subject Support", description: "50+ subjects across STEM, humanities, languages, arts, and professional certifications." },
  { iconName: "KeyRound", title: "Answer Key Generation", description: "Automatic answer key creation with detailed explanations for each correct answer." },
  { iconName: "FileDown", title: "PDF Export", description: "Professional PDF output with custom branding, headers, and formatting options." },
  { iconName: "Layers", title: "Template Library", description: "Pre-built templates for common exam formats, quiz styles, and assessment patterns." },
];

const benefits = [
  { iconName: "Clock", title: "Save 20+ Hours Weekly", description: "Automate question creation and spend time on teaching, not formatting." },
  { iconName: "Zap", title: "Instant Generation", description: "Generate a complete test with 50 questions in under 30 seconds." },
  { iconName: "Users", title: "Built for Educators", description: "Designed with teachers, professors, and training managers in mind." },
  { iconName: "Award", title: "Quality Assured", description: "AI-generated questions are reviewed for accuracy, clarity, and appropriate difficulty." },
];

export default function TestGeneratorPage() {
  return (
    <>
      <ToolHero {...tool} iconName={tool.icon} mockup={<TestGeneratorMockup />} />
      <ToolFeatures features={features} accentColor={tool.accentColor} title="Smart Assessment Tools" subtitle="Everything educators need to create professional assessments." />
      <ToolBenefits benefits={benefits} accentColor={tool.accentColor} title="Why Test Generator" />
      <section className="py-32 relative bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display tracking-tight">Frequently Asked Questions</h2>
          </div>
          <FaqSection faqs={testGeneratorFaq} accentColor={tool.accentColor} />
        </div>
      </section>
      <ToolCta name={tool.name} accentColor={tool.accentColor} />
    </>
  );
}
