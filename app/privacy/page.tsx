import type { Metadata } from "next";
import { FooterSection } from "@/components/layout/sections/footer";
import { PrivacyPolicy } from "@/components/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | Aquaturbo Swim Academy",
  description:
    "How Aquaturbo Swim Academy handles website information and swimming lesson enquiries. Available in English and Traditional Chinese.",
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyPolicy />
      <FooterSection />
    </>
  );
}
