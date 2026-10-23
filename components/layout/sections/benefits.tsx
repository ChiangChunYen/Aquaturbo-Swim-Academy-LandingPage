"use client";

import { useLanguage } from "@/components/layout/language-provider";

export const BenefitsSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="benefits"
      className="container max-w-6xl py-16 text-left sm:py-24"
    >
      <div className="w-full">
        <div>
          {/* <h2 className="text-lg text-primary mb-2 tracking-wider">
            {t.benefits.eyebrow}
          </h2> */}

          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-xl">
            {t.benefits.title}
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t.benefits.description.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
