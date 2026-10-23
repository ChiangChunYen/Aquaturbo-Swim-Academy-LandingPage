"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="container max-w-6xl py-16 text-left sm:py-24">
      <div className="w-full">
        <div className="space-y-6">
          <div className="text-2xl font-bold tracking-tight sm:text-xl">
            <h2>
              {t.hero.titleBefore}
              {t.hero.titleAccent ? (
                <span className="text-primary px-2">{t.hero.titleAccent}</span>
              ) : null}
              {t.hero.titleAfter}
            </h2>
          </div>

          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t.hero.subtitle.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href="#contact">
                {t.hero.getStarted}
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};
