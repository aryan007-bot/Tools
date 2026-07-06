import Link from "next/link";
import { Container } from "@/components/common/Container";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold text-xl">
                K
              </div>
              <span className="font-heading font-semibold text-xl tracking-tight">
                Kira
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The first AI platform that delivers personalized education at scale.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">AI Operating System</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Learning System</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Integrations</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Security & Compliance</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-sm text-muted-foreground">
          <p>© 2026 Kira Learning - All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-xs">
            <Link href="#" className="hover:text-foreground transition-colors">COPPA</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Saas Agreement</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Certifications</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
