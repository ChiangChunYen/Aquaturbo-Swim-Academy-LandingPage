"use client";

import { useLanguage } from "@/components/layout/language-provider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const AboutHeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="about-hero-title"
      className="relative isolate flex min-h-[calc(100dvh-4rem)] w-full items-start overflow-hidden bg-surface-inverse pb-12 pt-[clamp(3rem,17svh,10rem)] sm:items-center sm:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 motion-safe:animate-in motion-safe:zoom-in-95 motion-safe:duration-1000"
      >
        <Image
          src="/hero_image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,15,23,0.58),rgba(8,15,23,0.34)_48%,rgba(8,15,23,0.48))]"
      />

      <div className="container max-w-6xl text-left motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700">
        {t.aboutHero.kicker ? (
          <p className="mb-6 text-left text-lg font-bold uppercase tracking-[0.65em] text-white drop-shadow-sm motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 sm:text-2xl lg:mb-8 lg:text-4xl">
            {t.aboutHero.kicker}
          </p>
        ) : null}

        <div className="text-left text-white motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <h1
            id="about-hero-title"
            className="text-[clamp(2rem,10vw,2.75rem)] font-black uppercase leading-[1.15] tracking-[0.025em] sm:text-[clamp(3rem,6vw,5.5rem)] sm:leading-[1.05]"
          >
            <span className="block">{t.aboutHero.title1}</span>
            <span className="block">{t.aboutHero.title2}</span>
            <span className="block">{t.aboutHero.title3}</span>
          </h1>
        </div>

        <p className="pt-9 text-left text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold uppercase leading-[1.2] tracking-[0.025em] text-white drop-shadow-md motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          {t.aboutHero.tagline1}
        </p>
        <p className="pt-2 text-left text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold uppercase leading-[1.2] tracking-[0.025em] text-white drop-shadow-md motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          {t.aboutHero.tagline2}
        </p>

        <div className="mt-8 flex justify-start sm:mt-10">
          <Button asChild variant="secondary" className="w-40 font-bold">
            <Link href="#contact">{t.hero.contact}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
