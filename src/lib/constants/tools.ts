import { Tool } from "@/types";

export const tools: Tool[] = [
  {
    id: "voice-to-excel",
    name: "Voice To Excel",
    slug: "/voice-to-excel",
    tagline: "Speak. Transcribe. Export.",
    description:
      "Convert spoken voice into structured Excel sheets automatically. Record, transcribe in real-time, categorize data intelligently, and export production-ready spreadsheets.",
    features: [
      "Voice recording with noise cancellation",
      "Real-time speech-to-text transcription",
      "Automatic Excel sheet generation",
      "Intelligent data categorization",
      "One-click export to XLSX/CSV",
    ],
    icon: "Mic",
    image: "/WhatsApp Image 2026-06-20 at 10.43.38 PM (1).jpeg",
    accentFrom: "#10b981",
    accentTo: "#06b6d4",
    accentColor: "#10b981",
  },
  {
    id: "test-generator",
    name: "Test Generator",
    slug: "/test-generator",
    tagline: "Generate. Assess. Excel.",
    description:
      "Create tests, quizzes, and question papers automatically. Choose subjects, set difficulty levels, generate answer keys, and export to PDF in seconds.",
    features: [
      "AI-powered question generation",
      "Customizable difficulty levels",
      "Multi-subject support",
      "Automatic answer key creation",
      "Professional PDF export",
    ],
    icon: "FileQuestion",
    image: "/WhatsApp Image 2026-06-20 at 10.43.38 PM.jpeg",
    accentFrom: "#f97316",
    accentTo: "#f59e0b",
    accentColor: "#f97316",
  },
  {
    id: "video-editor",
    name: "Video Editor",
    slug: "/video-editor",
    tagline: "Edit. Enhance. Export.",
    description:
      "AI-assisted video editing with timeline controls, automatic subtitles, smart trimming, professional effects, and high-quality export.",
    features: [
      "Professional timeline editing",
      "AI-powered auto subtitles",
      "Smart clip trimming",
      "Cinematic effects library",
      "4K export support",
    ],
    icon: "Film",
    image: "/WhatsApp Image 2026-06-20 at 10.43.38 PM (2).jpeg",
    accentFrom: "#ef4444",
    accentTo: "#ec4899",
    accentColor: "#ef4444",
  },
  {
    id: "fee-collection",
    name: "Fee Collection",
    slug: "/fee-collection",
    tagline: "Track. Collect. Report.",
    description:
      "Complete fee management system for schools and institutes. Track payments, send reminders, generate reports, and analyze financial data.",
    features: [
      "Comprehensive fee tracking",
      "Digital payment records",
      "Automated due reminders",
      "Detailed financial reports",
      "Advanced analytics dashboard",
    ],
    icon: "Wallet",
    image: "/WhatsApp Image 2026-06-20 at 10.43.39 PM.jpeg",
    accentFrom: "#3b82f6",
    accentTo: "#14b8a6",
    accentColor: "#3b82f6",
  },
  {
    id: "email-assistant",
    name: "Email Assistant",
    slug: "/email-assistant",
    tagline: "Draft. Refine. Send.",
    description:
      "Generate, improve, and automate emails. From smart drafts to tone adjustments, templates to scheduling — your complete email workflow.",
    features: [
      "AI draft generation",
      "Context-aware smart replies",
      "Professional tone adjustment",
      "Customizable email templates",
      "Intelligent send scheduling",
    ],
    icon: "Mail",
    image: "/WhatsApp Image 2026-06-20 at 10.43.39 PM (1).jpeg",
    accentFrom: "#8b5cf6",
    accentTo: "#6366f1",
    accentColor: "#8b5cf6",
  },
];

export const getToolBySlug = (slug: string) =>
  tools.find((t) => t.slug === `/${slug}` || t.id === slug);
