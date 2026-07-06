"use client";

import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Shield } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", description: "We believe professionals shouldn't juggle 10 different subscriptions for basic business tasks." },
  { icon: Heart, title: "User-First Design", description: "Every pixel, every interaction, every workflow is designed with the end user in mind." },
  { icon: Lightbulb, title: "Relentless Innovation", description: "We ship weekly. Our AI models improve daily. Our tools get smarter with every update." },
  { icon: Shield, title: "Trust & Privacy", description: "Your data is yours. We never sell, share, or use your information for training." },
];

const team = [
  { name: "Alex Morgan", role: "CEO & Co-founder", initials: "AM" },
  { name: "Jordan Lee", role: "CTO & Co-founder", initials: "JL" },
  { name: "Sam Chen", role: "Head of Design", initials: "SC" },
  { name: "Riley Patel", role: "Head of Engineering", initials: "RP" },
  { name: "Casey Kim", role: "Head of Product", initials: "CK" },
  { name: "Morgan Davis", role: "Head of Growth", initials: "MD" },
];

export function AboutContent() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-xs font-semibold text-gray-700 mb-8">
              Our Story
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold font-display tracking-tight mb-6">
              Building the future of
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-cyan-500">
                business productivity
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              ToolStack was born from a simple frustration: why do professionals need
              separate subscriptions for voice transcription, test creation, video editing,
              fee management, and email writing? We set out to change that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-6">
                One platform.<br />Every professional tool you need.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We started ToolStack in 2024 with a clear vision: unify essential business tools
                into a single, beautifully designed platform. No more switching between apps,
                managing multiple subscriptions, or dealing with fragmented workflows.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, thousands of professionals — from educators to finance directors,
                content creators to school administrators — rely on ToolStack to power
                their daily work.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
              {[
                { value: "10K+", label: "Active Users" },
                { value: "5", label: "Powerful Tools" },
                { value: "99.9%", label: "Uptime" },
                { value: "50+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-white border border-gray-200 text-center">
                  <p className="text-3xl font-bold font-display text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display tracking-tight mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-xl mx-auto">The principles that guide every decision we make.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-6 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold font-display text-gray-900 mb-1">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display tracking-tight mb-4">The Team</h2>
            <p className="text-gray-600 max-w-xl mx-auto">The people behind ToolStack, dedicated to building the best productivity platform.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-lg font-bold text-gray-600">
                  {member.initials}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{member.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
