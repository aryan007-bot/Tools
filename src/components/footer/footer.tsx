"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-300 font-sans w-full flex flex-col pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">

          {/* Company Info - spans 2 cols on lg */}
          <div className="lg:col-span-2 flex flex-col items-start pr-8">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-white p-1 flex items-center justify-center overflow-hidden rounded-md">
                <Image 
                  src="/Untitled_design-removebg-preview.png"
                  alt="ToolsStack Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">
                ToolsStack<sup className="text-xs text-[#a855f7] -top-3">™</sup>
              </span>
            </div>
            <p className="text-[11px] text-gray-500 tracking-wide mb-6 font-medium">
              by AscendX Innovations Pvt. Ltd.
            </p>
            <p className="text-[#a1a1aa] text-sm leading-relaxed max-w-[340px]">
              Revenue-first AI agency. We build custom AI systems, autonomous agents, and intelligent software that drive measurable business results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-8 font-medium">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-5">
              {['Home', 'Our Solutions', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-xs text-gray-300 hover:text-white uppercase tracking-widest font-semibold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-8 font-medium">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <Mail className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400">Email</span>
                  <a href="mailto:CONTACT@PROFITAGENTZ.COM" className="text-[11px] text-gray-200 hover:text-white uppercase font-mono tracking-widest transition-colors break-all">
                    CONTACT@PROFITAGENTZ.COM
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400">Phone</span>
                  <a href="tel:+918448335264" className="text-[11px] text-gray-200 hover:text-white font-mono tracking-widest transition-colors">
                    +91 844 833 5264
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-[#a855f7] mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400">Address</span>
                  <span className="text-[11px] text-gray-200 font-mono tracking-wide leading-relaxed">
                    New Delhi - 110072, NCR, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-900/80"></div>

        {/* Middle Sub-footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 gap-6">
          <p className="text-gray-300 text-sm font-medium">
            Profit Agentz™ is a brand of AscendX Innovations Pvt. Ltd.
          </p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-[10px] text-gray-400 uppercase tracking-widest font-mono font-medium">
            <span className="text-[#a855f7] text-[8px]">♦</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-[#a855f7] text-[8px]">♦</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-[#a855f7] text-[8px]">♦</span>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <span className="text-[#a855f7] text-[8px]">♦</span>
            <Link href="#" className="hover:text-white transition-colors">AI Ethics</Link>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 gap-4">
          <p className="text-gray-500 text-[11px] font-medium tracking-wide">
            © 2026 AscendX Innovations Pvt. Ltd. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#a855f7] transition-colors">
            Back To Top
          </button>
        </div>

      </div>

      {/* Huge Background Text */}
      <div className="w-full flex justify-center mt-0 select-none overflow-hidden">
        <span
          className="font-black tracking-tighter uppercase whitespace-nowrap"
          style={{
            fontSize: 'clamp(3rem, 14vw, 15rem)',
            lineHeight: '0.75',
            color: '#1a0b2e',
            marginBottom: '-3%',
            WebkitTextStroke: '1px rgba(168, 85, 247, 0.1)'
          }}
        >
          Profit Agentz
        </span>
      </div>
    </footer>
  );
}
