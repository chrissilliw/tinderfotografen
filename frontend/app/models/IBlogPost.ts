import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface IContent {
    type: string;
    children: {
      type: string;
      text: string;
    }[];
  }

  export interface IAttributes {
    title: string;
    summary: string;
    isFeatured: boolean;
    content: IContent[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    metaTitle: string;
    metaDescription: string;
  }

  export interface IBlog {
    id: number;
    attributes: IAttributes;
  }

  export interface IBlogResponse {
    data: IBlog[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }

// export interface IAttributes {
//     Title: string;
//     Description: BlocksContent;
//     createdAt: string;
//     updatedAt: string; 
//     publishedAt: string;

// }

// export interface IBlog {
//     id: number;
//     attributes: IAttributes;
// }