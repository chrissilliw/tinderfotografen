export interface IImageAttributes {
    url: string;
    alternativeText: string | null;
    name: string;
}

export interface IImageData {
    id: number; 
    attributes: IImageAttributes;
}

export interface ILogoLink {
    id: number;
    text: string;
    href: string; 
    image: {
        data: IImageData;
    };
}

export interface ILink {
    id: number;
    href: string;
    text: string;
    external: boolean;
}

export interface ICta {
    id: number;
    href: string;
    text: string;
    external: boolean;
}

export interface ITopNav {
    id: number;
    logoLink: ILogoLink;
    link: ILink[];
    cta: ICta;
}

export interface IAttributes {
    title: string;
    Description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    topnav: ITopNav;
}

export interface IData {
    data: {
        id: number;
        attributes: IAttributes;
    } 
}