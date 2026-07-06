import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

export function Section({ className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24 lg:py-32 overflow-hidden", className)}
      {...props}
    >
      <div className={cn("mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
