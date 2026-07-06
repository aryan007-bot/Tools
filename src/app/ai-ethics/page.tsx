import { PolicyLayout } from "@/components/layout/policy-layout";

export default function AIEthicsPage() {
  return (
    <PolicyLayout title="AI Ethics Policy" lastUpdated="January 13, 2026">
      <div className="space-y-4">
        <p>At ProfitAgentz, we believe Artificial Intelligence should augment human capabilities while respecting fundamental rights, privacy, and safety. This AI Ethics Policy outlines our core principles for developing, deploying, and integrating AI solutions.</p>
        <p className="font-semibold text-zinc-800">We are committed to building AI systems that are transparent, fair, and accountable.</p>
        <p>This document serves as our guiding framework for ethical AI implementation across all our services and products.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit border-b border-zinc-200 pb-3">1. Transparency & Explainability</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>We clearly disclose when users are interacting with AI agents rather than human operators.</li>
          <li>We strive to make our AI systems&apos; decision-making processes understandable and interpretable.</li>
          <li>We provide documentation on system capabilities, limitations, and intended use cases.</li>
          <li>We avoid &quot;black box&quot; implementations where human oversight is impossible.</li>
        </ul>
        <p className="text-sm text-zinc-500 italic">Category: Core Principles</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit border-b border-zinc-200 pb-3">2. Fairness & Bias Mitigation</h3>
        <p>We actively work to identify and mitigate biases in our AI systems by:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Evaluating training data for representational biases.</li>
          <li>Testing models across diverse scenarios before deployment.</li>
          <li>Implementing feedback loops to correct biased outputs when discovered.</li>
          <li>Designing systems that promote equitable outcomes for all users.</li>
        </ul>
        <p className="text-sm text-zinc-500 italic">Category: Responsible Development</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit border-b border-zinc-200 pb-3">3. Privacy & Data Governance</h3>
        <p>Our AI development strictly adheres to our Privacy Policy and global data protection standards.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-zinc-800">No Unauthorized Training:</strong> Client data is never used to train shared models without explicit, written consent.</li>
          <li><strong className="text-zinc-800">Data Minimization:</strong> We use only the data necessary to achieve specific project goals.</li>
          <li><strong className="text-zinc-800">Secure Processing:</strong> All AI processing occurs within secure, enterprise-grade environments.</li>
        </ul>
        <p className="text-sm text-zinc-500 italic">Category: Data Protection</p>
      </div>

      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 space-y-5 my-8">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit border-b border-zinc-200 pb-3">Human-Centric Approach</h3>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-zinc-900">Human in the Loop (HITL)</h4>
          <p>We design AI systems to empower human decision-makers, not replace them entirely. Critical decisions require human oversight and validation.</p>
          <p className="text-purple-600 font-medium">Accountability always rests with humans.</p>
        </div>
        <div className="space-y-2 pt-4 border-t border-zinc-200">
          <h4 className="text-lg font-semibold text-zinc-900">Safety & Security</h4>
          <p>We implement safeguards against malicious use, prompt injection, and adversarial attacks to ensure system integrity and user safety.</p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit border-b border-zinc-200 pb-3">4. Environmental Responsibility</h3>
        <p>We acknowledge the environmental impact of training and running large AI models.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>We optimize our models and infrastructure for energy efficiency.</li>
          <li>We choose cloud partners committed to renewable energy where possible.</li>
          <li>We recommend appropriately sized models for specific tasks to minimize unnecessary compute resources.</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit border-b border-zinc-200 pb-3">5. Continuous Evaluation</h3>
        <p>AI technology evolves rapidly, and so must our ethical frameworks.</p>
        <p>We regularly review our AI Ethics Policy, conduct internal audits of our systems, and stay informed about emerging best practices and regulatory requirements globally.</p>
        <p className="text-zinc-500">We welcome feedback from our clients and the broader community on our ethical practices.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-zinc-900 font-outfit">Contact & Inquiries</h3>
        <p>If you have questions about our AI Ethics Policy or wish to report a concern regarding our AI systems, please contact us.</p>
        <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 mt-6 space-y-2">
          <p><span className="text-zinc-800 font-semibold">Ethics Contact:</span> <a href="mailto:contact@profitagentz.com" className="text-purple-600 hover:text-purple-500 transition-colors">contact@profitagentz.com</a></p>
          <p><span className="text-zinc-800 font-semibold">Response time for ethics inquiries:</span> 15 business days</p>
        </div>
        <p className="pt-4 text-zinc-500">This policy reflects our current standards and will be updated as AI technology and societal norms evolve.</p>
      </div>
    </PolicyLayout>
  );
}
