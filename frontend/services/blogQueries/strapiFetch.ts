import configBaseUrl from "@/app/lib/config";
import { ICategory } from "@/app/models/ICategory"
export const getCategories = async (path: string): Promise<ICategory | undefined> => {

    const baseUrl = "http://localhost:1337";
    
    try {
        const response = await fetch(baseUrl + path, { cache: 'no-store' });
        const data: ICategory = await response.json();
        return data;
    } catch(error) {
        console.error("Error: ", error);
        return undefined;
    }
}

export const getBlogs = async (path: string) => {
    const baseUrl = "http://localhost:1337";

    try {
        const response = await fetch(baseUrl + path, { cache: 'no-store' });
        const data: any = await response.json();
        return data;
    } catch (error) {
        console.error("Error: ", error);
    }
}

const reqOptions = {
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PRIVAT_STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
    },
    cache: "no-store" as RequestCache,
};

export const fetchBlogs = async (path: string) => {
 try {
    const response = await fetch(configBaseUrl + path, reqOptions);
    const data: any = await response.json();
    return data;
 } catch (error) {
    console.error("Error: ", error);
    return undefined;
 }
}
