"use client";

import { useLanguage } from "@/components/layout/language-provider";

export const BenefitsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div>
          {/* <h2 className="text-lg text-primary mb-2 tracking-wider">
            {t.benefits.eyebrow}
          </h2> */}

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.benefits.title}
          </h2>
          <div className="text-xl text-muted-foreground space-y-4">
            {t.benefits.description.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
