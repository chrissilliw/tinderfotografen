import { div } from "framer-motion/client";
import React from "react";

interface SocialLinkProps {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

interface SocialProps {
  id: number;
  title: string;
  socialLink: SocialLinkProps[];
}

interface ISocialsProps {
  data: {
    id: number;
    text: string;
    socials: SocialProps;
  };
}

const SocialTextSection = ({ data }: Readonly<ISocialsProps>) => {
  if (!data || !data.text || !data.socials) {
    return <div>No Social/Text data available</div>;
  }

  // console.log(dat);
  return (
    <>
      <h3>{data.socials.title}</h3>
      <div>
        {data.socials.socialLink.map((social) => (
          <div key={social.id}>{social.text}</div>
        ))}
      </div>
      <p>{data.text}</p>
    </>
  );
};

export default SocialTextSection;
