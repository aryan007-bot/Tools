"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Info, 
  Activity, 
  Share2, 
  Clock, 
  FileText, 
  UserCheck, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Calendar,
  Lock,
  Building
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const sections = [
  { id: "collect", title: "1. Information We Collect", icon: Info },
  { id: "ai-usage", title: "2. AI Systems & Data Usage", icon: Shield, highlight: true },
  { id: "how-use", title: "3. How We Use Your Information", icon: Activity },
  { id: "sharing", title: "4. Data Sharing", icon: Share2 },
  { id: "security", title: "5. Data Security", icon: Lock },
  { id: "retention", title: "6. Data Retention", icon: Clock },
  { id: "dpa", title: "7. Data Processing Agreement", icon: FileText },
  { id: "rights", title: "8. Your Privacy Rights", icon: UserCheck },
  { id: "transfers", title: "9. International Data Transfers", icon: Globe },
  { id: "contact", title: "10. Updates & Contact", icon: Mail }
];

export function PrivacyContent() {
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
        <div className="absolute top-[-10%] left-[5%] w-[40%] h-[60%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute top-[10%] right-[5%] w-[40%] h-[60%] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center gap-2 mb-6 text-emerald-700">
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Privacy & Trust
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <span>Last updated: January 2026</span>
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
            <strong>ProfitAgentz</strong> (&ldquo;ProfitAgentz&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates{" "}
            <a href="https://profitagentz.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 underline font-medium">
              https://profitagentz.com
            </a>{" "}
            and provides AI automation services. We are committed to protecting your privacy and handling data responsibly in accordance with global privacy regulations.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
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
                        ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/10" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-white" : "text-gray-400"}`} />
                    <span className="truncate">{section.title.split(". ")[1]}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* 1. Information We Collect */}
            <motion.section 
              id="collect" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Info className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">1. Information We Collect</h2>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">a) Information You Provide</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Name", "Email", "Company", "Phone", "Message/Inquiry Details"].map((item) => (
                      <span key={item} className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">b) Business & Usage Information</h3>
                  <p className="text-sm text-gray-500 mb-3">AI requirements, system integrations, communication records, audit data, and service usage patterns.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">c) Automatically Collected Data</h3>
                  <p className="text-sm text-gray-500 mb-3">IP address • Browser/device information • Pages visited • Cookies & analytics data • Performance metrics</p>
                </div>
              </div>
            </motion.section>

            {/* 2. AI Systems & Data Usage */}
            <motion.section 
              id="ai-usage" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border-2 border-emerald-500/20 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">2. AI Systems & Data Usage</h2>
              </div>
              
              {/* Highlight commitment */}
              <div className="mb-6 p-4 rounded-xl bg-emerald-50/70 border border-emerald-100/50 text-emerald-800 text-sm font-medium">
                <p className="flex items-start gap-2.5">
                  <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Key AI Data Commitment:</strong> Client data is never used to train shared or third-party AI models unless explicitly agreed in a written Data Processing Agreement (DPA).
                  </span>
                </p>
              </div>

              <ul className="space-y-3.5 text-gray-600 leading-relaxed text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>Custom AI agents use only authorized client data for specific project purposes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>Strict access controls limited to project needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>Focus on operational efficiency, not data mining or model training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span>GDPR-compliant data processing for EU clients</span>
                </li>
              </ul>
            </motion.section>

            {/* 3. How We Use Your Information */}
            <motion.section 
              id="how-use" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Activity className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">3. How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm">
                  Respond to inquiries • Deliver AI automation services & audits • Project communication • Improve site & security • Compliance with legal obligations
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    Legal Basis: Contract, Consent, Legitimate Interest
                  </span>
                </div>
              </div>
            </motion.section>

            {/* 4. Data Sharing */}
            <motion.section 
              id="sharing" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Share2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">4. Data Sharing</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm">
                  Essential service providers (hosting/infrastructure) • Analytics tools • Communication platforms
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  We do not sell, rent, or trade personal data.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    Legal Basis: Limited to Service Delivery
                  </span>
                </div>
              </div>
            </motion.section>

            {/* 5. Data Security */}
            <motion.section 
              id="security" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">5. Data Security</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm">
                  Industry-standard encryption • Access controls • Secure infrastructure • Limited internal access • Regular security audits • Incident response protocols
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700 border border-emerald-100">
                    Legal Basis: Enterprise Grade
                  </span>
                </div>
              </div>
            </motion.section>

            {/* 6. Data Retention */}
            <motion.section 
              id="retention" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">6. Data Retention</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm">
                  Kept only as long as necessary for service delivery, legal obligations, or legitimate business needs. Deletion requests considered subject to contractual obligations.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    Legal Basis: Purpose-Based
                  </span>
                </div>
              </div>
            </motion.section>

            {/* 7. Data Processing Agreement */}
            <motion.section 
              id="dpa" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">7. Data Processing Agreement (DPA)</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm">
                  Enterprise & regulated clients: Comprehensive DPA available upon request including GDPR Article 28 requirements.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    Legal Basis: Upon Request
                  </span>
                </div>
              </div>
            </motion.section>

            {/* 8. Your Privacy Rights */}
            <motion.section 
              id="rights" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">8. Your Privacy Rights</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <div className="flex flex-wrap gap-2 text-sm">
                  {["Access", "Correction", "Deletion", "Withdraw consent", "Object to processing", "Data portability"].map((right) => (
                    <span key={right} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full font-medium text-xs">
                      {right}
                    </span>
                  ))}
                </div>
                <p className="text-sm">
                  To exercise these rights, please email:{" "}
                  <a href="mailto:contact@profitagentz.com" className="text-emerald-600 hover:underline font-semibold">
                    contact@profitagentz.com
                  </a>
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                    Legal Basis: 30 Days Maximum Response Time
                  </span>
                </div>
              </div>
            </motion.section>

            {/* 9. International Data Transfers */}
            <motion.section 
              id="transfers" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">9. International Data Transfers</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  Data may be processed globally with appropriate safeguards including Standard Contractual Clauses (SCCs), Privacy Shield frameworks, and Binding Corporate Rules where applicable.
                </p>
                <p>
                  We ensure equivalent protection through contractual and technical measures regardless of processing location.
                </p>
              </div>
            </motion.section>

            {/* 10. Updates & Contact */}
            <motion.section 
              id="contact" 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold font-display text-gray-900">10. Updates & Contact</h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm mb-6">
                <p>
                  This policy may be updated to reflect changes in regulations, services, or business practices. Significant changes will be prominently displayed here with advance notice where required.
                </p>
                <p>
                  We recommend reviewing this policy periodically to stay informed about our privacy practices.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl">
                    <span className="block text-xs font-bold text-gray-400 uppercase">Jurisdiction</span>
                    <span className="text-sm font-semibold text-gray-800">Delhi, India</span>
                  </div>
                  <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl">
                    <span className="block text-xs font-bold text-gray-400 uppercase">Privacy Inquiry Response</span>
                    <span className="text-sm font-semibold text-gray-800">15 business days</span>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Accept Statement */}
            <p className="text-center text-xs text-gray-400 px-4">
              This Privacy Policy explains our data handling practices. Your use of our services constitutes acceptance of these terms.
            </p>

            {/* Related Documents */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-600" />
                Related Documents & Resources
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Cookie Policy", href: "/cookie-policy" },
                  { label: "AI Ethics Policy", href: "/ai-ethics" },
                  { label: "Terms of Service", href: "/terms-and-condition" }
                ].map((doc) => (
                  <Link 
                    key={doc.label} 
                    href={doc.href}
                    className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-emerald-500/30 hover:bg-emerald-50/20 text-xs font-medium text-gray-700 hover:text-emerald-700 transition-all"
                  >
                    <span>{doc.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Card (Profit Agentz Details) */}
            <div className="bg-gradient-to-br from-slate-900 to-gray-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_50%)]" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                <div className="max-w-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-lg tracking-tight font-display">Profit Agentz™</span>
                  </div>
                  <p className="text-xs text-emerald-400/80 font-medium mb-4">by AscendX Innovations Pvt. Ltd.</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Revenue-first AI agency. We build custom AI systems, autonomous agents, and intelligent software that drive measurable business results.
                  </p>
                  
                  <div className="flex gap-4 text-xs font-medium text-gray-400">
                    <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                    <Link href="/tools" className="hover:text-emerald-400 transition-colors">Our Solutions</Link>
                    <Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link>
                    <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
                  </div>
                </div>

                <div className="flex-shrink-0 bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 space-y-4 md:w-80">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Get In Touch</h4>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">Email</span>
                      <a href="mailto:contact@profitagentz.com" className="text-sm hover:text-emerald-400 transition-colors font-medium">
                        contact@profitagentz.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] text-gray-400 uppercase">Phone</span>
                      <a href="tel:+918448335264" className="text-sm hover:text-emerald-400 transition-colors font-medium">
                        +91 844 833 5264
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
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

          </div>
        </div>
      </div>
    </div>
  );
}
