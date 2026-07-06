import { FAQ } from "@/types";

export const homepageFaq: FAQ[] = [
  {
    id: "1",
    question: "What is ToolStack?",
    answer:
      "ToolStack is a multi-tool SaaS platform that provides five powerful business tools under one subscription. From voice transcription to video editing, we help professionals work smarter.",
  },
  {
    id: "2",
    question: "Can I use just one tool or do I need all five?",
    answer:
      "You can use any combination of tools that suits your needs. Our Starter plan gives you access to one tool, while Professional and Enterprise plans unlock all five.",
  },
  {
    id: "3",
    question: "Is there a free trial?",
    answer:
      "Yes! Our Starter plan is completely free and gives you access to one tool with limited exports. You can upgrade anytime to unlock more features.",
  },
  {
    id: "4",
    question: "How does billing work?",
    answer:
      "We offer both monthly and yearly billing. Yearly plans save you approximately 20%. You can upgrade, downgrade, or cancel your subscription at any time.",
  },
  {
    id: "5",
    question: "Do you offer team or enterprise pricing?",
    answer:
      "Yes, our Enterprise plan supports unlimited team members with dedicated support, custom integrations, and SLA guarantees. Contact our sales team for custom pricing.",
  },
  {
    id: "6",
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption, SOC 2 compliance, and never share your data. All processing happens on our secure infrastructure.",
  },
];

export const voiceToExcelFaq: FAQ[] = [
  { id: "v1", question: "How accurate is the transcription?", answer: "Our AI transcription engine achieves 95%+ accuracy for clear speech. We support multiple languages and accents with continuous improvement." },
  { id: "v2", question: "Can I edit the generated Excel sheets?", answer: "Yes, generated Excel files are fully editable in Microsoft Excel, Google Sheets, or any spreadsheet application." },
  { id: "v3", question: "What languages are supported?", answer: "We currently support English, Spanish, French, German, Hindi, and 20+ other languages with automatic detection." },
  { id: "v4", question: "Is there a recording time limit?", answer: "Free users can record up to 5 minutes per session. Pro users get unlimited recording duration." },
];

export const testGeneratorFaq: FAQ[] = [
  { id: "t1", question: "What subjects are supported?", answer: "Test Generator supports 50+ subjects across STEM, humanities, languages, arts, and professional certifications." },
  { id: "t2", question: "Can I customize the generated questions?", answer: "Absolutely. You can edit, reorder, or regenerate any question. You have full control over the final output." },
  { id: "t3", question: "What export formats are available?", answer: "Export to PDF, Word, or plain text. Pro users also get access to LMS-compatible formats like QTI and SCORM." },
  { id: "t4", question: "Are the questions unique each time?", answer: "Yes, our AI generates unique questions each time based on the subject, topic, and difficulty parameters you set." },
];

export const videoEditorFaq: FAQ[] = [
  { id: "ve1", question: "What video formats are supported?", answer: "We support all major formats including MP4, MOV, AVI, MKV, and WebM for both import and export." },
  { id: "ve2", question: "Is there a file size limit?", answer: "Free users can edit videos up to 500MB. Pro users get up to 10GB per project, and Enterprise users have no limits." },
  { id: "ve3", question: "How accurate are the auto-subtitles?", answer: "Our AI subtitle engine achieves 97% accuracy with support for 30+ languages and customizable timing." },
  { id: "ve4", question: "Can I add my own effects and transitions?", answer: "Yes, you can use our built-in library or import custom effects. Pro users get access to the full premium effects collection." },
];

export const feeCollectionFaq: FAQ[] = [
  { id: "f1", question: "Can I integrate with payment gateways?", answer: "Yes, we integrate with Stripe, PayPal, Razorpay, and 20+ other payment processors for seamless fee collection." },
  { id: "f2", question: "Is there a student/parent portal?", answer: "Yes, our platform includes a dedicated portal where students and parents can view fee status and make payments." },
  { id: "f3", question: "Can I generate custom reports?", answer: "Absolutely. Create custom reports with filters for date range, class, fee type, payment status, and more." },
  { id: "f4", question: "How are reminders sent?", answer: "Reminders can be sent via email, SMS, or in-app notifications. You can customize the schedule and messaging." },
];

export const emailAssistantFaq: FAQ[] = [
  { id: "e1", question: "Which email providers are supported?", answer: "We integrate with Gmail, Outlook, Yahoo, and any IMAP-compatible email service." },
  { id: "e2", question: "Can the AI learn my writing style?", answer: "Yes, the more you use Email Assistant, the better it learns your tone, vocabulary, and preferred structure." },
  { id: "e3", question: "Is my email data used for training?", answer: "No. Your emails are processed in real-time and never stored or used for AI training. Your privacy is our priority." },
  { id: "e4", question: "How does scheduling work?", answer: "You can schedule emails to send at specific times, use smart timing suggestions, or set recurring email sequences." },
];

export const pricingFaq: FAQ[] = [
  { id: "p1", question: "Can I switch plans anytime?", answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate the difference." },
  { id: "p2", question: "Is there a contract or commitment?", answer: "No long-term contracts. Monthly plans can be cancelled anytime. Yearly plans include a 30-day money-back guarantee." },
  { id: "p3", question: "Do you offer discounts for nonprofits or education?", answer: "Yes, we offer 50% off for verified nonprofits and educational institutions. Contact our sales team to apply." },
  { id: "p4", question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, bank transfers (Enterprise), and regional payment methods in 50+ countries." },
];
