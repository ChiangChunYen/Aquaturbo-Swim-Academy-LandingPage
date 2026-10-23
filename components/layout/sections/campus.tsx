"use client";

import Image from "next/image";
import { useLanguage } from "@/components/layout/language-provider";

export const CampusSection = () => {
  const { t } = useLanguage();

  return (
    <section id="campus" className="w-full py-16 sm:py-24">
      <div className="container max-w-6xl text-left">
        {/* {t.campus.eyebrow ? (
          <h2 className="mb-2 text-center text-lg tracking-wider text-primary">
            {t.campus.eyebrow}
          </h2>
        ) : null} */}
        <h2 className="mb-8 text-2xl font-bold tracking-tight sm:mb-10 sm:text-xl">
          {t.campus.title}
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6">
          {t.campus.items.map((item) => (
            <article
              key={item.title}
              className="group transition-opacity duration-300 hover:opacity-80"
            >
              <div className="relative mb-6 aspect-[1.5] w-full overflow-hidden rounded-2xl border border-border bg-muted">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              {item.description ? (
                <p className="leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
