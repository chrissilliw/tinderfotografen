"use client";
import { IData } from "@/app/models/ITopNav";
import Link from "next/link";
import Image from "next/image";
import { fetchTopNavMenu } from "@/services/strapiFetch";
import { useEffect, useState } from "react";
import CtaButton from "../Buttons/CtaButton";
import React from "react";

const Navbar = () => {
  const [menuData, setMenuData] = useState<IData | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topNavData = await fetchTopNavMenu();
        setMenuData(topNavData);
        console.log(topNavData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (
    !menuData ||
    !menuData.data ||
    !menuData.data.attributes ||
    !menuData.data.attributes.topnav
  ) {
    return <p>Loading...</p>;
  }

  const { logoLink, link, cta } = menuData.data.attributes.topnav;

  const imageUrl = `http://localhost:1337${logoLink.image.data.attributes.url}`;

  return (
    <>
      <div className="py-6 flex items-center justify-between mx-auto max-sm:px-3 lg:max-w-6xl">
        <div className="">
          <Link href={logoLink}>
            <Image
              src={imageUrl}
              width={250}
              height={50}
              alt={logoLink.image.data.attributes.name}
            />
          </Link>
        </div>
        <div className="flex gap-5">
          {link.map((singleLink) => (
            <Link href={singleLink.href} key={singleLink.id}>
              {singleLink.text}
            </Link>
          ))}
        </div>
        <CtaButton cta={cta} />
        {/* <div className="">
          <Link href={cta.href}>{cta.text}</Link>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
