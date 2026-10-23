import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto flex max-w-screen-xl items-center px-4 py-6 sm:px-6 sm:py-8">
        <Link href="/" className="relative h-10 w-40 overflow-hidden">
          <Image
            src="/brand-image-without-bg-cropped.png"
            alt="Aquaturbo Swim Academy"
            fill
            sizes="160px"
            className="object-contain"
          />
        </Link>
      </div>
    </footer>
  );
};
