"use client";

import { motion } from "framer-motion";
import { 
  Scale, 
  AlertTriangle, 
  User, 
  Cpu, 
  Database, 
  XCircle, 
  ShieldOff, 
  Gavel, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Calendar,
  Building,
  ArrowRight,
  BookOpen,
  FileText
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const sections = [
  { id: "services", title: "1. Our Services", icon: Scale },
  { id: "no-guarantee", title: "2. No Guarantee of Results", icon: AlertTriangle },
  { id: "responsibilities", title: "3. Your Responsibilities", icon: User },
  { id: "ip", title: "4. Intellectual Property", icon: Cpu },
  { id: "data-usage", title: "5. Data Usage & AI Training", icon: Database },
  { id: "prohibitions", title: "6. Acceptable Use & Prohibitions", icon: XCircle },
  { id: "disclaimers", title: "Critical Disclaimers", icon: AlertTriangle, highlight: true },
  { id: "liability", title: "7. Limitation of Liability", icon: ShieldOff },
  { id: "governing-law", title: "8. Governing Law & Disputes", icon: Gavel },
  { id: "contact", title: "9. Changes & Contact", icon: Mail }
];

export function TermsContent() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pt-28 pb-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 height-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[5%] w-[40%] h-[60%] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute top-[10%] right-[5%] w-[40%] h-[60%] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-2 mb-6 text-cyan-700">
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Legal Agreement
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-gray-900 mb-4">
              Terms of Service
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Last updated: January 13, 2026</span>
            </div>
          </motion.div>
        </div>

        {/* Intro Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white shadow-sm leading-relaxed text-gray-600"
        >
          <p className="mb-4">
            By accessing or using{" "}
            <a href="https://profitagentz.com" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700 underline font-medium">
              https://profitagentz.com
            </a>{" "}
            or any ProfitAgentz services (including pre-built AI agents, custom AI development, and AI integration services), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;).
          </p>
          <p className="mb-4 font-medium text-gray-900">
            If you do not agree with these Terms, you must not access or use our website or services.
          </p>
          <p>
            These Terms govern the provision of AI agents, both ready-to-use and fully custom-built, as well as AI integration into existing software systems. We aim for transparency in an evolving technology landscape.
          </p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-4">Sections</h2>
            <nav className="space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-medium transition-all ${
                      isActive 
                        ? section.highlight
                          ? "bg-amber-500 text-white shadow-sm shadow-amber-500/10"
                          : "bg-cyan-500 text-white shadow-sm shadow-cyan-500/10" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-white" : section.highlight ? "text-amber-500" : "text-gray-400"}`} />
                    <span className="truncate">{section.title.includes(". ") ? section.title.split(". ")[1] : section.title}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* 1. Our Services */}
            <motion.section 
              id="services" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">1. Our Services</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>ProfitAgentz provides:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Pre-built AI agents and automation tools</li>
                  <li>Custom AI agent development</li>
                  <li>AI integration & optimization services for existing software</li>
                  <li>Consulting and related professional services</li>
                </ul>
                <p className="mt-4 pt-2 border-t border-gray-100/60">
                  Specific scope, deliverables, timelines and pricing are defined in separate Order Forms, Proposals, Statements of Work or project agreements (&ldquo;Engagement Documents&rdquo;).
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    Category: Service Description
                  </span>
                </div>
              </div>
            </motion.section>

            {/* 2. No Guarantee of Results */}
            <motion.section 
              id="no-guarantee" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">2. No Guarantee of Results</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>All services are provided on a <strong className="text-gray-900">best-efforts</strong> basis.</p>
                <div className="p-4 bg-amber-50/55 border border-amber-200/50 rounded-xl text-amber-900">
                  <p className="font-bold mb-1.5 uppercase text-xs tracking-wider">No Warranty Disclaimer</p>
                  <p className="mb-2">We provide <strong>NO WARRANTY</strong> — express or implied — regarding:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Business results, revenue, profit, cost savings</li>
                    <li>Accuracy, completeness or reliability of AI outputs</li>
                    <li>Absence of errors, hallucinations or biases</li>
                  </ul>
                </div>
                <p>
                  AI technology is probabilistic and non-deterministic by nature.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    Category: Disclaimer of Warranties
                  </span>
                </div>
              </div>
            </motion.section>

            {/* 3. Your Responsibilities */}
            <motion.section 
              id="responsibilities" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <User className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">3. Your Responsibilities</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>You agree to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide only lawful, accurate and rights-cleared data/materials</li>
                  <li>Use AI outputs responsibly and in compliance with law</li>
                  <li>Implement appropriate human review & oversight</li>
                  <li>Not rely solely on AI for critical decisions (legal, financial, medical, safety-related etc.)</li>
                </ul>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    Category: User Obligations
                  </span>
                </div>
              </div>
            </motion.section>

            {/* 4. Intellectual Property */}
            <motion.section 
              id="ip" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Cpu className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">4. Intellectual Property</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Our pre-built agents, core platform, background IP and general methodologies remain our exclusive property.</li>
                  <li>
                    Unless otherwise agreed in writing in an Engagement Document:
                    <ul className="list-circle pl-5 mt-2 space-y-1">
                      <li>You own the custom deliverables specifically created for you (subject to our background IP license).</li>
                      <li>We retain rights to use generalized learnings, techniques & anonymized data for improving our services.</li>
                    </ul>
                  </li>
                  <li>You grant us a license to use input data solely to provide & improve the services (subject to our Privacy Policy).</li>
                </ul>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    Category: Intellectual Property Rights
                  </span>
                </div>
              </div>
            </motion.section>

            {/* 5. Data Usage & AI Training */}
            <motion.section 
              id="data-usage" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Database className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">5. Data Usage & AI Training</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p className="font-semibold text-gray-900">Unless explicitly agreed otherwise in writing:</p>
                <p>
                  We may use anonymized, aggregated usage data and outputs to train, fine-tune and improve our AI models and services.
                </p>
                <p>
                  You may opt-out of training usage via written notice (some service features may be limited as a result).
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    Category: Data Usage Terms
                  </span>
                </div>
              </div>
            </motion.section>

            {/* 6. Acceptable Use & Prohibitions */}
            <motion.section 
              id="prohibitions" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <XCircle className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">6. Acceptable Use & Prohibitions</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>You may <strong>not</strong> use our services to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Violate any law or regulation</li>
                  <li>Infringe third-party intellectual property</li>
                  <li>Generate harmful, deceptive, defamatory, illegal or adult content</li>
                  <li>Develop competing AI products/services (without written consent)</li>
                  <li>Attempt to reverse-engineer, extract or copy our models/agents</li>
                </ul>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    Category: Usage Restrictions
                  </span>
                </div>
              </div>
            </motion.section>

            {/* Critical Disclaimers */}
            <motion.section 
              id="disclaimers" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-amber-50/45 border border-amber-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-amber-200/60">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-amber-950">Critical Disclaimers</h2>
              </div>

              {/* AI Technology Disclaimer */}
              <div className="space-y-2">
                <h3 className="font-bold text-amber-900 text-sm uppercase tracking-wider">AI Technology Disclaimer</h3>
                <p className="text-sm text-amber-850 leading-relaxed">
                  Artificial Intelligence may generate incorrect, incomplete, biased, offensive or nonsensical outputs (&ldquo;hallucinations&rdquo;).
                </p>
                <p className="text-sm font-semibold text-amber-900 leading-relaxed">
                  All outputs are provided &ldquo;AS IS&rdquo; without warranty of any kind.
                </p>
                <p className="text-xs text-amber-800">
                  Users must implement appropriate human review, validation, and oversight mechanisms.
                </p>
              </div>

              {/* No Professional Advice */}
              <div className="space-y-2 pt-4 border-t border-amber-200/50">
                <h3 className="font-bold text-amber-900 text-sm uppercase tracking-wider">No Professional Advice</h3>
                <p className="text-sm text-amber-850 leading-relaxed">
                  Our services and AI agents do NOT constitute legal, financial, investment, tax, medical, insurance or any other regulated professional advice.
                </p>
                <p className="text-xs text-amber-800">
                  Outputs are for informational/research purposes only. Always consult qualified professionals before making decisions.
                </p>
              </div>
            </motion.section>

            {/* 7. Limitation of Liability */}
            <motion.section 
              id="liability" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <ShieldOff className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">7. Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p className="font-semibold text-gray-900">To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>We are not liable for any indirect, consequential, incidental, special, punitive or exemplary damages.</li>
                  <li>Our total aggregate liability shall not exceed the fees actually paid by you to us in the twelve (12) months preceding the claim.</li>
                  <li>This limitation applies regardless of the cause of action or legal theory.</li>
                </ul>
              </div>
            </motion.section>

            {/* 8. Governing Law & Disputes */}
            <motion.section 
              id="governing-law" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Gavel className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">8. Governing Law & Disputes</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  These Terms are governed exclusively by the laws of India, without regard to conflict of law principles.
                </p>
                <p>
                  Any disputes shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
                </p>
                <p className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                  For EU consumers: You may also have the right to file a complaint with your local consumer protection authority.
                </p>
              </div>
            </motion.section>

            {/* 9. Changes & Contact */}
            <motion.section 
              id="contact" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">9. Changes & Contact</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm mb-6">
                <p>
                  We may update these Terms at any time. Continued use after posting changes constitutes acceptance.
                </p>
                <p>
                  Material changes will be notified via email or website notice at least 30 days before taking effect.
                </p>
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                  <span className="block text-xs font-bold text-gray-400 uppercase">Response time for legal inquiries</span>
                  <span className="text-sm font-semibold text-gray-800">10 business days</span>
                </div>
              </div>
            </motion.section>

            {/* Entire Agreement statement */}
            <p className="text-center text-xs text-gray-400 px-4">
              These Terms constitute the entire agreement regarding our services and supersede all prior understandings. Certain engagements may be governed by additional or superseding written agreements.
            </p>

            {/* Related Documents */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-600" />
                Related Documents & Resources
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "AI Ethics Policy", href: "/ai-ethics" },
                  { label: "Cookie Policy", href: "/cookie-policy" }
                ].map((doc) => (
                  <Link 
                    key={doc.label} 
                    href={doc.href}
                    className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-cyan-500/30 hover:bg-cyan-50/20 text-xs font-medium text-gray-700 hover:text-cyan-700 transition-all"
                  >
                    <span>{doc.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Complimentary Audit Banner */}
            <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="max-w-md">
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
                      Limited Offer
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold leading-relaxed">
                    Get a complimentary AI audit to identify automation opportunities, performance gaps, and cost-saving optimizations across your existing systems.
                  </p>
                </div>
                <Link 
                  href="/contact" 
                  className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-white text-gray-900 hover:bg-gray-55 font-bold rounded-xl text-sm transition-all shadow-md group"
                >
                  <span>Get Free Audit</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Contact Card (Profit Agentz Details) */}
            <div className="bg-gradient-to-br from-slate-900 to-gray-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                <div className="max-w-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-5 h-5 text-cyan-400" />
                    <span className="font-bold text-lg tracking-tight font-display">Profit Agentz™</span>
                  </div>
                  <p className="text-xs text-cyan-400/80 font-medium mb-4">by AscendX Innovations Pvt. Ltd.</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Revenue-first AI agency. We build custom AI systems, autonomous agents, and intelligent software that drive measurable business results.
                  </p>
                  
                  <div className="flex gap-4 text-xs font-medium text-gray-400">
                    <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
                    <Link href="/tools" className="hover:text-cyan-400 transition-colors">Our Solutions</Link>
                    <Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
                    <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
                  </div>
                </div>

                <div className="flex-shrink-0 bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-4 md:w-80">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Get In Touch</h4>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">Email</span>
                      <a href="mailto:contact@profitagentz.com" className="text-sm hover:text-cyan-400 transition-colors font-medium">
                        contact@profitagentz.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">Phone</span>
                      <a href="tel:+918448335264" className="text-sm hover:text-cyan-400 transition-colors font-medium">
                        +91 844 833 5264
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">Address</span>
                      <p className="text-xs text-gray-300 leading-normal">
                        Sainik Enclave, Najafgarh,<br />
                        New Delhi - 110043, NCR, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Footer Info */}
            <p className="text-center text-[10px] text-gray-450 leading-relaxed px-4">
              Profit Agentz™ is a brand of AscendX Innovations Pvt. Ltd.<br />
              &copy; 2026 AscendX Innovations Pvt. Ltd. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
