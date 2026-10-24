"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";

export function PrivacyPolicy() {
  const { t } = useLanguage();
  const policy = t.privacy;
  const linkClassName =
    "rounded-sm text-primary underline underline-offset-4 hover:decoration-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <main id="main-content" className="container max-w-6xl py-12 sm:py-20">
      <article aria-labelledby="privacy-title" className="max-w-3xl text-left">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {policy.backHome}
        </Link>

        <header className="mb-10 border-b border-border pb-8 sm:mb-12">
          <h1
            id="privacy-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {policy.title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {policy.updatedLabel}: <time dateTime="2026-10-24">{policy.updatedDate}</time>
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {policy.introduction}
          </p>
        </header>

        <div className="space-y-10 sm:space-y-12">
          {policy.sections.map(({ id, title, paragraphs }) => (
            <section key={id} aria-labelledby={`privacy-${id}`}>
              <h2
                id={`privacy-${id}`}
                className="mb-4 text-xl font-semibold leading-snug"
              >
                {title}
              </h2>
              <div className="space-y-4 leading-relaxed text-muted-foreground">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section aria-labelledby="privacy-contact">
            <h2
              id="privacy-contact"
              className="mb-4 text-xl font-semibold leading-snug"
            >
              {policy.contactTitle}
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {policy.contactDescription}
            </p>
            <address className="mt-6 space-y-3 break-words not-italic leading-relaxed">
              <p className="font-semibold">Aquaturbo Swim Academy</p>
              <p>
                <a href={`mailto:${t.contact.email}`} className={linkClassName}>
                  {t.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                  className={linkClassName}
                >
                  {t.contact.phone}
                </a>
              </p>
              <p>{t.contact.address}</p>
            </address>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {policy.regulatorBefore}{" "}
              <a href="https://www.oipc.bc.ca/" className={linkClassName}>
                {policy.regulatorName}
              </a>{" "}
              {policy.regulatorAfter}
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
