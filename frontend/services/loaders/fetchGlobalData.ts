import qs from "qs";
import { baseUrl, getStrapiData } from "../strapiFetch";

interface Props {
    params: {slug: string}
}

export const getGlobalPageMetadata = async() => {
    const url = new URL("/api/", baseUrl);

    url.search = qs.stringify({
        fields: ["title", "description"]
    })
    return await getStrapiData(url.href);
}