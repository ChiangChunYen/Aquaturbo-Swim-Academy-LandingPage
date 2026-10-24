"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";

export const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6 sm:py-8">
        <Link href="/" className="relative h-10 w-40 shrink-0 overflow-hidden">
          <Image
            src="/brand-image-without-bg-cropped.png"
            alt="Aquaturbo Swim Academy"
            fill
            sizes="160px"
            className="object-contain"
          />
        </Link>
        <Link
          href="/privacy"
          className="rounded-sm text-sm underline decoration-white/50 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          {t.footer.privacyPolicy}
        </Link>
      </div>
    </footer>
  );
};
