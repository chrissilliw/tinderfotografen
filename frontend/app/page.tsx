import { getStrapiData } from "@/services/strapiFetch";
// import { fetchFeatureSection } from "@/services/strapiFetch";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IData } from "./models/IHeroSection";
import CtaButton from "./components/Buttons/CtaButton";
import HeroSection from "./components/custom/HeroSection";
import FeatureSection from "./components/custom/FeatureSection";
import React from "react";
import ImageInfoSection from "./components/custom/ImageInfoSection";
import TestimonialSection from "./components/custom/TestimonialSection";
import StepByStepSection from "./components/custom/StepByStepSection";
import FaqSection from "./components/custom/FaqSection";
import GallerySection from "./components/custom/GallerySection";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.feature-section":
      return <FeatureSection key={block.id} data={block} />;
    case "layout.image-info-section":
      return <ImageInfoSection key={block.id} data={block} />;
    case "layout.step-by-step-section":
      return <StepByStepSection key={block.id} data={block} />;
    case "layout.testimonial-section":
      return <TestimonialSection key={block.id} data={block} />;
    case "layout.faq-section":
      return <FaqSection key={block.id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page");

  const { blocks } = strapiData || {};

  const baseURL = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;

  if (!strapiData) {
    return <p>Loading...</p>;
  }

  if (!blocks) {
    return <div>No blocks found</div>;
  }

  return (
    <>
      <main>
        {/* <HeroSection data={blocks[0]} />
        <FeatureSection data={blocks[1]} />
        <ImageInfoSection data={blocks[2]} />
        <ImageInfoSection data={blocks[3]} />
        <TestimonialSection data={blocks[4]} />
        <StepByStepSection data={blocks[5]} />
        <FaqSection data={blocks[6]} /> */}
        {blocks.map((block: any) => (
          <div key={block.id}> {blockRenderer(block)}</div>
        ))}
        <GallerySection />
      </main>
    </>
  );
}
