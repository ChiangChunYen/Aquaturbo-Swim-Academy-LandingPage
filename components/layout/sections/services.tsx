"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/layout/language-provider";

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="container max-w-6xl py-16 text-left sm:py-24"
    >
      {/* <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {t.services.eyebrow}
      </h2> */}

      <h2 className="mb-8 text-2xl font-bold tracking-tight sm:mb-10 sm:text-xl">
        {t.services.title}
      </h2>
      {/* <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {t.services.description}
      </h3> */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {t.services.items.map(({ title, description }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle className="text-xl leading-snug">{title}</CardTitle>
              <p className="text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
