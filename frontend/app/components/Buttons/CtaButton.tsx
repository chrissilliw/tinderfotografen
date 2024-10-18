import { ICta } from "@/app/models/ITopNav";
import React from "react";

interface Props {
  cta?: ICta;
}

const CtaButton = ({ cta }: Props) => {
  if (!cta) {
    return null;
  }
  return (
    <a
      href={cta.href}
      className="px-5 py-2 inline-block bg-rose-500 text-slate-100 rounded-lg"
      target={cta.external ? "_blank" : "_self"}
      rel={cta.external ? "noopener noreferrer" : undefined}
    >
      {cta.text}
    </a>
  );
};

export default CtaButton;
