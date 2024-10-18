export interface IImageAttributes {
    url: string;
    alternativeText: string | null;
    name: string;
}

export interface IImageData {
    id: number;
    attributes: IImageAttributes;
}
export interface ICta {
    id: number;
    href: string;
    text: string;
    external: boolean;
}

export interface ILogoGrid {
    id: number;
    text: string;
    image: {
        data: IImageData;
    }
}

export interface IHeroSection {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    image: {
        data: IImageData;
    }
    logoGrid: ILogoGrid[];
    cta: ICta;
}

export interface IAttributes {
    title: string;
    Description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    blocks: IHeroSection[];
}

export interface IData {
    data: {
        id: number;
        attributes: IAttributes;
    }
}