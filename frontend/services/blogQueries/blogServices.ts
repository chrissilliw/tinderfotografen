const API_BASE_URL =
process.env.NEXT_PRIVAT_STRAPI_BASE_URL ?? "http://localhost:1337";

export const getBlogs = async () =>{
    try {
        const res = await fetch(` ${API_BASE_URL}/api/bloggs?populate=*`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PRIVATE_STRAPI_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch blogs");

        return await res.json();
    } catch (error) {
        console.error("Error fetching blogs");
        return null;
    }
}