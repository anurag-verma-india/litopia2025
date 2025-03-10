import { StaticImageData } from "next/image";
import type { FC, SVGProps } from "react";

export interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export interface FAQItemProps {
  question: string;
  answer: string;
  category: string;
}

export interface SocialLinkProps {
  name: string;
  href: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  lightColor: string;
  darkColor: string;
}

export interface Sponsor {
  name: string;
  image: StaticImageData;
}

export interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}
