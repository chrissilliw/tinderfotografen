import { ICta } from "@/app/models/ITopNav";
import React from "react";

interface Props {
  cta?: ICta;
}

const StrokeButton = ({ cta }: Props) => {
  if (!cta) {
    return null;
  }
  return (
    <a
      href={cta.href}
      className="px-7 py-3 inline-block border-black border-solid border-2 rounded-full"
      target={cta.external ? "_blank" : "_self"}
      rel={cta.external ? "noopener noreferrer" : undefined}
    >
      {cta.text}
    </a>
  );
};

export default StrokeButton;
