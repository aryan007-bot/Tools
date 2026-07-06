import Link from "next/link";
import { Zap, Instagram, Linkedin, Facebook } from "lucide-react";
import { footerLinks, socialLinks, toolNav } from "@/lib/constants/navigation";

const socialIcons: Record<string, React.ComponentType<any>> = {
  Instagram: Instagram,
  LinkedIn: Linkedin,
  Facebook: Facebook,
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 flex items-center justify-center">
                <img src="/Untitled_design-removebg-preview.png" alt="ToolStack Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                ToolStack
              </span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-6">
              Multiple tools unified in one premium platform.
              Built for professionals who demand excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-9 h-9 rounded-lg bg-gray-800/50 hover:bg-gray-700 flex items-center justify-center transition-all text-gray-400 hover:text-white"
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Icon ? <Icon className="w-4.5 h-4.5" /> : link.label[0]}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Tools</h4>
            <ul className="space-y-3">
              {toolNav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} ToolStack. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
