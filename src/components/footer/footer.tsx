"use client";

import Link from "next/link";
import { Twitter, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1C1C1E] text-white font-sans w-full flex flex-col pt-16 relative overflow-hidden" style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px',
      backgroundPosition: 'center top'
    }}>
      
      <div className="max-w-[1200px] mx-auto px-6 w-full z-10 relative mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-display font-bold text-2xl tracking-tight flex items-center gap-2">
               <span className="w-8 h-8 bg-white p-0.5 rounded flex items-center justify-center overflow-hidden">
                 <img src="/Untitled_design-removebg-preview.png" alt="ToolStack Logo" className="w-full h-full object-contain" />
               </span>
               ToolStack™
            </Link>
            <p className="text-gray-400 text-sm">by AscendX Innovations Pvt. Ltd.</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mt-2">
              Revenue-first AI agency. We build custom AI systems, autonomous agents, and intelligent software that drive measurable business results.
            </p>
            <div className="flex items-center gap-4 text-gray-400 mt-2">
               <Link href="#" aria-label="Twitter"><Twitter className="w-4 h-4 hover:text-white transition-colors" /></Link>
               <Link href="#" aria-label="Facebook"><Facebook className="w-4 h-4 hover:text-white transition-colors" /></Link>
               <Link href="#" aria-label="Instagram"><Instagram className="w-4 h-4 hover:text-white transition-colors" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/solutions" className="hover:text-white transition-colors">Our Solutions</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Get In Touch</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                 <Mail className="w-4 h-4 text-gray-500" />
                 <a href="mailto:contact@profitagentz.com" className="hover:text-white transition-colors uppercase tracking-wider text-xs">contact@profitagentz.com</a>
              </div>
              <div className="flex items-center gap-3">
                 <Phone className="w-4 h-4 text-gray-500" />
                 <span>+91 844 833 5264</span>
              </div>
              <div className="flex items-start gap-3">
                 <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                 <span className="leading-relaxed">New Delhi - 110072,<br/>NCR, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6 text-[11px] text-gray-500 font-medium">
           <div className="text-center md:text-left">
             <p>Profit Agentz™ is a brand of AscendX Innovations Pvt. Ltd.</p>
             <p className="mt-1">© 2026 AscendX Innovations Pvt. Ltd. All rights reserved.</p>
           </div>
           
           <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 uppercase tracking-wider">
             <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
             <span>♦</span>
             <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
             <span>♦</span>
             <Link href="/cookie" className="hover:text-gray-300 transition-colors">Cookie Policy</Link>
             <span>♦</span>
             <Link href="/ethics" className="hover:text-gray-300 transition-colors">AI Ethics</Link>
           </div>

           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
             className="uppercase tracking-wider hover:text-white transition-colors border border-gray-700 px-4 py-2 rounded"
           >
             Back To Top
           </button>
        </div>
      </div>

      {/* Massive Logo */}
      <div className="w-full flex justify-center items-end pointer-events-none select-none z-0 overflow-hidden leading-none h-[40vh] md:h-[60vh] max-h-[500px]">
        <h1 
          className="font-serif font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-[#8B5CF6]/40 to-transparent whitespace-nowrap leading-[0.75]"
          style={{ fontSize: "clamp(8rem, 25vw, 40rem)", marginBottom: "-5%" }}
        >
          ToolStack
        </h1>
      </div>
    </footer>
  );
}
