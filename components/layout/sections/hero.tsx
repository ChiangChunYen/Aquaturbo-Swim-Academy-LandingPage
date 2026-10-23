"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              {t.hero.titleBefore}
              {t.hero.titleAccent ? (
                <span className="text-primary px-2">
                  {t.hero.titleAccent}
                </span>
              ) : null}
              {t.hero.titleAfter}
            </h1>
          </div>

          <div className="max-w-screen-sm mx-auto space-y-4 text-xl text-muted-foreground">
            {t.hero.subtitle.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href="#contact">
                {t.hero.getStarted}
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
