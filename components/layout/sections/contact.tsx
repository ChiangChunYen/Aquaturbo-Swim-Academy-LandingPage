"use client";

import Image from "next/image";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="container max-w-6xl py-16 text-left sm:py-24"
    >
      <div>
        <div>
          <div className="mb-8 sm:mb-10">
            {/* <h2 className="mb-2 text-lg tracking-wider text-primary">
              {t.contact.eyebrow}
            </h2> */}

            <h2 className="text-2xl font-bold tracking-tight sm:text-xl">
              {t.contact.title}
            </h2>
          </div>
          {/* <p className="mb-10 text-muted-foreground">
            {t.contact.description}
          </p> */}
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="grid grid-cols-1 gap-8 leading-relaxed sm:grid-cols-2">
            <div>
              <div className="mb-1 flex gap-2">
                <Building2 />
                <div className="font-bold">{t.contact.addressTitle}</div>
              </div>
              <div>{t.contact.address}</div>
            </div>

            <div>
              <div className="mb-1 flex gap-2">
                <Phone />
                <div className="font-bold">{t.contact.callUs}</div>
              </div>
              <div>{t.contact.phone}</div>
            </div>

            <div>
              <div className="mb-1 flex gap-2">
                <Mail />
                <div className="font-bold">{t.contact.mailUs}</div>
              </div>
              <div>{t.contact.email}</div>
            </div>

            <div>
              <div className="mb-1 flex gap-2">
                <Clock />
                <div className="font-bold">{t.contact.visitUs}</div>
              </div>
              <div>
                <div>{t.contact.hoursWeekdays}</div>
                <div>{t.contact.hoursWeekend}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="flex min-w-0 flex-col items-start gap-3 text-left">
              <div className="flex items-center gap-2 font-bold">
                <Image
                  src="/icon-whatsapp.png"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                />
                <span>WhatsApp</span>
              </div>
              <Image
                src="/whatsapp.png"
                alt={t.contact.whatsappQrAlt}
                width={523}
                height={517}
                sizes="(min-width: 640px) 208px, 40vw"
                className="aspect-square w-full max-w-52 bg-white object-contain p-2"
              />
            </div>

            <div className="flex min-w-0 flex-col items-start gap-3 text-left">
              <div className="flex items-center gap-2 font-bold">
                <Image
                  src="/icon-wechat.png"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                />
                <span>WeChat</span>
              </div>
              <Image
                src="/wechat.png"
                alt={t.contact.wechatQrAlt}
                width={640}
                height={630}
                sizes="(min-width: 640px) 208px, 40vw"
                className="aspect-square w-full max-w-52 bg-white object-contain p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
