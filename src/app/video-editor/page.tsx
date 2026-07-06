import type { Metadata } from "next";
import { ToolHero } from "@/components/shared/tool-hero";
import { ToolFeatures } from "@/components/shared/tool-features";
import { ToolBenefits } from "@/components/shared/tool-benefits";
import { ToolCta } from "@/components/shared/tool-cta";
import { FaqSection } from "@/components/ui/faq-section";
import { videoEditorFaq } from "@/lib/constants/faq";
import { getToolBySlug } from "@/lib/constants/tools";
import { VideoEditorMockup } from "./mockup";

export const metadata: Metadata = {
  title: "Video Editor — Edit. Enhance. Export. | ToolStack",
  description: "AI-assisted video editing with timeline controls, automatic subtitles, smart trimming, effects, and 4K export.",
};

const tool = getToolBySlug("video-editor")!;

const features = [
  { iconName: "Film", title: "Timeline Editing", description: "Professional multi-track timeline with drag-and-drop, split, merge, and precise frame-level control." },
  { iconName: "Subtitles", title: "Auto Subtitles", description: "AI-powered subtitle generation with 97% accuracy. Supports 30+ languages with customizable styling." },
  { iconName: "Scissors", title: "Smart Trim", description: "AI identifies and removes silence, filler words, and awkward pauses for a polished final cut." },
  { iconName: "Sparkles", title: "Effects Library", description: "Cinematic transitions, color grading, text animations, and visual effects — all built in." },
  { iconName: "Download", title: "4K Export", description: "Export in up to 4K resolution with optimized presets for YouTube, Instagram, TikTok, and more." },
  { iconName: "Clapperboard", title: "Scene Detection", description: "Automatically detect scene changes and create edit points for faster workflow." },
];

const benefits = [
  { iconName: "Clock", title: "Edit 10x Faster", description: "AI handles the tedious work — trimming, subtitles, color correction — so you focus on creativity." },
  { iconName: "Zap", title: "Zero Learning Curve", description: "Intuitive interface that works like professional editors, without the complexity." },
  { iconName: "Monitor", title: "Browser-Based", description: "No downloads. Edit directly in your browser with hardware-accelerated rendering." },
  { iconName: "Palette", title: "Professional Results", description: "Output that rivals expensive desktop software. Used by creators, marketers, and agencies." },
];

export default function VideoEditorPage() {
  return (
    <>
      <ToolHero {...tool} iconName={tool.icon} mockup={<VideoEditorMockup />} />
      <ToolFeatures features={features} accentColor={tool.accentColor} title="Professional Editing Suite" subtitle="Everything you need to create stunning videos." />
      <ToolBenefits benefits={benefits} accentColor={tool.accentColor} title="Why Video Editor" />
      <section className="py-32 relative bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display tracking-tight">Frequently Asked Questions</h2>
          </div>
          <FaqSection faqs={videoEditorFaq} accentColor={tool.accentColor} />
        </div>
      </section>
      <ToolCta name={tool.name} accentColor={tool.accentColor} />
    </>
  );
}
