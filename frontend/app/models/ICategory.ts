export interface IAttributes {
    Title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}


export interface IData {
        id: number;
        attributes: IAttributes;
}

export interface IMeta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    } 
}

export interface ICategory {
    data: IData[];
    meta: IMeta;
}