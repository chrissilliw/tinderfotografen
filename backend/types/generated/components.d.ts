import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutTopNav extends Schema.Component {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top Nav';
  };
  attributes: {
    logoLink: Attribute.Component<'elements.logo-link'>;
    link: Attribute.Component<'elements.link', true>;
    cta: Attribute.Component<'elements.link'>;
  };
}

export interface LayoutTestimonialSection extends Schema.Component {
  collectionName: 'components_layout_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
    description: '';
  };
  attributes: {
    testimonial: Attribute.Component<'elements.testimonial', true>;
    sectionTitle: Attribute.Component<'elements.section-title'>;
  };
}

export interface LayoutStepByStepSection extends Schema.Component {
  collectionName: 'components_layout_step_by_step_sections';
  info: {
    displayName: 'Step By Step Section';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.Component<'elements.section-title'>;
    howItWorks_card: Attribute.Component<'elements.how-it-works-card', true>;
    readMore: Attribute.Component<'elements.button-link'>;
  };
}

export interface LayoutSocialAndTextSection extends Schema.Component {
  collectionName: 'components_layout_social_and_text_sections';
  info: {
    displayName: 'Social and Text Section';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
    socials: Attribute.Component<'elements.socials'>;
  };
}

export interface LayoutImageSection extends Schema.Component {
  collectionName: 'components_layout_image_sections';
  info: {
    displayName: 'Image Section';
    description: '';
  };
  attributes: {
    image: Attribute.Component<'elements.image', true>;
  };
}

export interface LayoutImageInfoSection extends Schema.Component {
  collectionName: 'components_layout_image_info_sections';
  info: {
    displayName: 'Image/Info Section';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    infoSection: Attribute.Component<'elements.info-section'> &
      Attribute.Required;
    readMore: Attribute.Component<'elements.button-link'>;
    imagePositioning: Attribute.Enumeration<['left', 'right']> &
      Attribute.DefaultTo<'left'>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    image: Attribute.Media<'images'>;
    cta: Attribute.Component<'elements.button-link'>;
    logoGrid: Attribute.Component<'elements.logo-grid', true>;
  };
}

export interface LayoutHeadingAndImageSection extends Schema.Component {
  collectionName: 'components_layout_heading_and_image_sections';
  info: {
    displayName: 'Heading and Image Section';
  };
  attributes: {
    headingGroup: Attribute.Component<'elements.heading-group'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LayoutFeatureSection extends Schema.Component {
  collectionName: 'components_layout_feature_sections';
  info: {
    displayName: 'Feature Section';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.Text;
    infoColumn: Attribute.Component<'elements.info-column', true>;
  };
}

export interface LayoutFaqSection extends Schema.Component {
  collectionName: 'components_layout_faq_sections';
  info: {
    displayName: 'FAQ Section';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.Component<'elements.section-title'>;
    faq: Attribute.Component<'elements.faq', true>;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    text: Attribute.Text;
    title: Attribute.String;
  };
}

export interface ElementsTestFeature extends Schema.Component {
  collectionName: 'components_elements_test_features';
  info: {
    displayName: 'testFeature';
  };
  attributes: {
    feature: Attribute.Component<'elements.feature'>;
    readMore: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsSocials extends Schema.Component {
  collectionName: 'components_elements_socials';
  info: {
    displayName: 'Socials';
  };
  attributes: {
    title: Attribute.String;
    socialLink: Attribute.Component<'elements.link', true>;
  };
}

export interface ElementsSocialGroup extends Schema.Component {
  collectionName: 'components_elements_social_groups';
  info: {
    displayName: 'Social Group';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    socialLink: Attribute.Component<'elements.link', true>;
  };
}

export interface ElementsSectionTitle extends Schema.Component {
  collectionName: 'components_elements_section_titles';
  info: {
    displayName: 'Section Title';
    icon: 'bold';
  };
  attributes: {
    sectionTitle: Attribute.String;
  };
}

export interface ElementsLogoLink extends Schema.Component {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo Link';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    text: Attribute.String;
    href: Attribute.String;
  };
}

export interface ElementsLogoGrid extends Schema.Component {
  collectionName: 'components_elements_logo_grids';
  info: {
    displayName: 'Logo Grid';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    text: Attribute.String;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    text: Attribute.String;
    external: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsInfoSection extends Schema.Component {
  collectionName: 'components_elements_info_sections';
  info: {
    displayName: 'Info Section';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ElementsInfoColumn extends Schema.Component {
  collectionName: 'components_elements_info_columns';
  info: {
    displayName: 'Info Column';
  };
  attributes: {
    feature: Attribute.Component<'elements.feature'>;
    readMore: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media<'images', true>;
  };
}

export interface ElementsHowItWorksCard extends Schema.Component {
  collectionName: 'components_elements_how_it_works_cards';
  info: {
    displayName: 'How it Works - Card';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ElementsHeadingGroup extends Schema.Component {
  collectionName: 'components_elements_heading_groups';
  info: {
    displayName: 'Heading Group';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

export interface ElementsHeadingAndImage extends Schema.Component {
  collectionName: 'components_elements_heading_and_images';
  info: {
    displayName: 'Heading and Image Section';
    description: '';
  };
  attributes: {
    headingGroup: Attribute.Component<'elements.heading-group'>;
    image: Attribute.Media<'images'>;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    icon: Attribute.Media<'images'>;
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface ElementsFaq extends Schema.Component {
  collectionName: 'components_elements_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.Text;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsAboutComponent extends Schema.Component {
  collectionName: 'components_elements_about_components';
  info: {
    displayName: 'About Component';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.top-nav': LayoutTopNav;
      'layout.testimonial-section': LayoutTestimonialSection;
      'layout.step-by-step-section': LayoutStepByStepSection;
      'layout.social-and-text-section': LayoutSocialAndTextSection;
      'layout.image-section': LayoutImageSection;
      'layout.image-info-section': LayoutImageInfoSection;
      'layout.hero-section': LayoutHeroSection;
      'layout.heading-and-image-section': LayoutHeadingAndImageSection;
      'layout.feature-section': LayoutFeatureSection;
      'layout.faq-section': LayoutFaqSection;
      'elements.testimonial': ElementsTestimonial;
      'elements.test-feature': ElementsTestFeature;
      'elements.socials': ElementsSocials;
      'elements.social-group': ElementsSocialGroup;
      'elements.section-title': ElementsSectionTitle;
      'elements.logo-link': ElementsLogoLink;
      'elements.logo-grid': ElementsLogoGrid;
      'elements.link': ElementsLink;
      'elements.info-section': ElementsInfoSection;
      'elements.info-column': ElementsInfoColumn;
      'elements.image': ElementsImage;
      'elements.how-it-works-card': ElementsHowItWorksCard;
      'elements.heading-group': ElementsHeadingGroup;
      'elements.heading-and-image': ElementsHeadingAndImage;
      'elements.feature': ElementsFeature;
      'elements.faq': ElementsFaq;
      'elements.button-link': ElementsButtonLink;
      'elements.about-component': ElementsAboutComponent;
    }
  }
}
